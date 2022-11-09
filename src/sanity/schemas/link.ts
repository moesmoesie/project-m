import { defineType, defineField } from "sanity";

export default defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      title: "Text",
      name: "text",
      type: "string",
    }),
    defineField({
      title: "Href",
      name: "href",
      type: "string",
    }),
    defineField({
      title: "Open new tab",
      name: "newTab",
      type: "boolean",
    }),
  ],
});
