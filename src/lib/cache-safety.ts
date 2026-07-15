import { OPAL_DEPLOYMENT_VERSION } from "./deployment-version";

const APP_CACHE_NAME_PATTERN = /(opal|opal-stones|workbox|vite|tanstack|react-start|nitro)/i;
const CLEANUP_COMPLETE_KEY = `opal-stones.cache-cleanup.complete.${OPAL_DEPLOYMENT_VERSION}`;
const CLEANUP_RELOAD_KEY = `opal-stones.cache-cleanup.reload.${OPAL_DEPLOYMENT_VERSION}`;
const VERSION_RELOAD_KEY_PREFIX = "opal-stones.version-reload.";

let startupSafetyStarted = false;

const isBrowser = () => typeof window !== "undefined" && typeof document !== "undefined";

const safeLocalGet = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeLocalSet = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Cache cleanup is best-effort when browser storage is unavailable.
  }
};

const markSessionReload = (key: string) => {
  try {
    if (window.sessionStorage.getItem(key) === "done") return false;
    window.sessionStorage.setItem(key, "done");
    return true;
  } catch {
    return false;
  }
};

const isCurrentOpalOrigin = () => {
  const hostname = window.location.hostname.toLowerCase();
  return (
    hostname.includes("opal") ||
    hostname.includes("stones") ||
    hostname === "localhost" ||
    hostname === "127.0.0.1"
  );
};

const isSameOriginUrl = (value?: string | null) => {
  if (!value) return false;
  try {
    return new URL(value, window.location.href).origin === window.location.origin;
  } catch {
    return false;
  }
};

const isObsoleteOpalRegistration = (registration: ServiceWorkerRegistration) => {
  const urls = [
    registration.scope,
    registration.active?.scriptURL,
    registration.installing?.scriptURL,
    registration.waiting?.scriptURL,
  ].filter(Boolean) as string[];

  return urls.some((url) => {
    if (!isSameOriginUrl(url)) return false;
    return APP_CACHE_NAME_PATTERN.test(url) || isCurrentOpalOrigin();
  });
};

const cleanupObsoleteOpalBrowserState = async () => {
  if (!isBrowser() || safeLocalGet(CLEANUP_COMPLETE_KEY) === "done") return false;

  let changed = false;

  try {
    if ("serviceWorker" in navigator && typeof navigator.serviceWorker.getRegistrations === "function") {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(
        registrations
          .filter(isObsoleteOpalRegistration)
          .map(async (registration) => {
            const unregistered = await registration.unregister();
            changed = changed || unregistered;
          }),
      );
    }

    if ("caches" in window) {
      const cacheNames = await window.caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => APP_CACHE_NAME_PATTERN.test(name))
          .map(async (name) => {
            const deleted = await window.caches.delete(name);
            changed = changed || deleted;
          }),
      );
    }
  } finally {
    safeLocalSet(CLEANUP_COMPLETE_KEY, "done");
  }

  return changed;
};

const extractServerVersion = (html: string) => {
  try {
    const parsed = new DOMParser().parseFromString(html, "text/html");
    return (
      parsed.querySelector('meta[name="opal-deployment-version"]')?.getAttribute("content") ||
      parsed.body?.getAttribute("data-opal-deployment-version") ||
      ""
    ).trim();
  } catch {
    return "";
  }
};

const reloadIfServerVersionChanged = async () => {
  if (!isBrowser() || OPAL_DEPLOYMENT_VERSION === "local-dev") return;

  try {
    const response = await window.fetch(window.location.href, {
      cache: "no-store",
      credentials: "same-origin",
      headers: { accept: "text/html" },
    });

    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok || !contentType.toLowerCase().includes("text/html")) return;

    const serverVersion = extractServerVersion(await response.text());
    if (!serverVersion || serverVersion === OPAL_DEPLOYMENT_VERSION) return;

    if (markSessionReload(`${VERSION_RELOAD_KEY_PREFIX}${serverVersion}`)) {
      window.location.reload();
    }
  } catch {
    // If the version probe fails, keep the current page usable.
  }
};

export function runOpalStartupSafety() {
  if (!isBrowser() || startupSafetyStarted) return;
  startupSafetyStarted = true;

  void (async () => {
    const cleanupChanged = await cleanupObsoleteOpalBrowserState();
    if (cleanupChanged && markSessionReload(CLEANUP_RELOAD_KEY)) {
      window.location.reload();
      return;
    }

    await reloadIfServerVersionChanged();
  })();
}
