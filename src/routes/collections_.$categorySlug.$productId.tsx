import { createFileRoute } from "@tanstack/react-router";

import {
  CatalogueProductPage,
  MissingCatalogueEntry,
} from "@/components/catalogue/CatalogueProductPage";
import { getProductByCategoryAndId } from "@/lib/catalogue";

export const Route = createFileRoute("/collections_/$categorySlug/$productId")({
  head: () => ({
    meta: [
      { title: "Collection Piece Preview | Opal Stones by Hanan Bugshan" },
      {
        name: "description",
        content:
          "A reusable Opal Stones product page template for private catalogue pieces and WhatsApp inquiry.",
      },
      { property: "og:title", content: "Opal Stones Collection Piece Preview" },
    ],
  }),
  component: ProductRoute,
});

function ProductRoute() {
  const { categorySlug, productId } = Route.useParams();
  const product = getProductByCategoryAndId(categorySlug, productId);

  if (!product) return <MissingCatalogueEntry />;

  return <CatalogueProductPage product={product} />;
}
