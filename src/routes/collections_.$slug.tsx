import { createFileRoute } from "@tanstack/react-router";

import { CatalogueCategoryPage } from "@/components/catalogue/CatalogueCategoryPage";
import {
  CatalogueProductPage,
  MissingCatalogueEntry,
} from "@/components/catalogue/CatalogueProductPage";
import { getCatalogueCategoryBySlug, getProductById } from "@/lib/catalogue";

export const Route = createFileRoute("/collections_/$slug")({
  head: () => ({
    meta: [
      { title: "Opal Stones Collection Preview" },
      {
        name: "description",
        content:
          "Browse a category-first Opal Stones collection preview or open a private product detail page.",
      },
      { property: "og:title", content: "Opal Stones Collection Preview" },
    ],
  }),
  component: CollectionSlugRoute,
});

function CollectionSlugRoute() {
  const { slug } = Route.useParams();
  const category = getCatalogueCategoryBySlug(slug);

  if (category) return <CatalogueCategoryPage category={category} />;

  const legacyProduct = getProductById(slug);
  if (legacyProduct) return <CatalogueProductPage product={legacyProduct} />;

  return <MissingCatalogueEntry />;
}
