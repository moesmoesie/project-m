import { createClient } from "next-sanity";
import BaseConfig from "./sanity.base-config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(BaseConfig);

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...BaseConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview: boolean | undefined) => (usePreview ? previewClient : sanityClient);
