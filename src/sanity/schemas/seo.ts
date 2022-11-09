import { defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "dontIndex",
      title: "Prevent page from appearing in search engines",
      type: "boolean",
    },
  ],
});
