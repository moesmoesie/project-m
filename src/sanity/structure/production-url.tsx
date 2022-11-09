import { AsyncComposableOption, ResolveProductionUrlContext } from "sanity";

type ProductionUrlType = AsyncComposableOption<string | undefined, ResolveProductionUrlContext>;

const ProductionUrl: ProductionUrlType = async (_, context) => {
  const { document } = context;

  const baseUrl = window.location.hostname === "localhost" ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL! : process.env.NEXT_PUBLIC_PRODUCTION_URL!;

  const previewUrl = new URL(baseUrl);
  const previewSecret = process.env.NEXT_PUBLIC_PREVIEW!;
  const doc: any = document;
  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`secret`, previewSecret);
  previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? "");
  return previewUrl.toString();
};

export default ProductionUrl;
