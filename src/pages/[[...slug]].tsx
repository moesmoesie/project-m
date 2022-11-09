import Head from "next/head";
import { GetStaticProps } from "next";
import { getClient } from "../sanity/sanity.server";
import { usePreviewSubscription } from "../sanity/sanity.helpers";
import { filterDataToSingleItem } from "../sanity/sanity.helpers";
import Module, { ModuleZod } from "../modules";
import { z } from "zod";
import { PageQuery, SlugQuery } from "../sanity/sanity.queries";

const PageZod = z.object({
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      dontIndex: z.boolean().optional(),
    })
    .nullable()
    .optional(),
  modules: z.array(ModuleZod).optional(),
});

type PageType = z.infer<typeof PageZod>;

interface Props {
  page: PageType;
  preview: boolean;
  query: string;
  queryParams: any;
}

const Page: React.FC<Props> = (props) => {
  const { data: previewData } = usePreviewSubscription(props.query, {
    params: props.queryParams ?? {},
    initialData: props.page,
    enabled: props.preview,
  });

  const page: PageType = filterDataToSingleItem(previewData, props.preview);

  return (
    <div>
      <Head>
        <title>{page?.seo?.title ?? "Project M"}</title>

        {page?.seo?.description && <meta name="description" content={page?.seo?.description} />}

        {page?.seo?.keywords && Array.isArray(page.seo.keywords) && <meta name="keywords" content={page?.seo?.keywords.join(", ")} />}

        {page?.seo?.dontIndex && <meta name="robots" content="noindex" />}
      </Head>
      <div className="min-h-screen flex flex-col">
        {page.modules &&
          page.modules.map((module, index) => {
            return <Module key={index} {...module} />;
          })}
      </div>
    </div>
  );
};

export default Page;

export async function getStaticPaths() {
  const data = await getClient(false).fetch(SlugQuery);

  return {
    paths: data,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  let slug = "/";

  if (params?.slug && Array.isArray(params.slug)) {
    slug += params.slug.join("/");
  }

  const queryParams = { slug };
  const data = await getClient(preview).fetch(PageQuery, queryParams);

  if (!data || (Array.isArray(data) && data.length === 0)) return { notFound: true };

  const page: Props = filterDataToSingleItem(data, preview);
  PageZod.parse(page);

  return {
    props: {
      page: page,
      query: preview ? PageQuery : null,
      queryParams: preview ? queryParams : null,
      preview: preview ?? false,
    },
  };
};
