declare const __OPAL_DEPLOYMENT_VERSION__: string;

export const OPAL_DEPLOYMENT_VERSION =
  typeof __OPAL_DEPLOYMENT_VERSION__ === "string" && __OPAL_DEPLOYMENT_VERSION__.trim()
    ? __OPAL_DEPLOYMENT_VERSION__.trim()
    : "local-dev";
