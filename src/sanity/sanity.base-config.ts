const BaseConfig = {
  name: process.env.NEXT_PUBLIC_SANITY_NAME!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2022-10-10",
  useCdn: false,
};

export default BaseConfig;
