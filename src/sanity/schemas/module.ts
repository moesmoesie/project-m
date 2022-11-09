import { defineField, defineType } from "sanity";

export default defineType({
  name: "module",
  type: "object",
  title: "Module Information",
  fields: [
    defineField({
      name: "identifier",
      title: "Identifier",
      type: "string",
    }),
    defineField({
      name: "background",
      title: "Background Color",
      type: "string",
    }),
    defineField({
      name: "paddingBottom",
      title: "Padding bottom",
      type: "object",
      options: {
        columns: 3,
      },
      fields: [
        defineField({
          name: "small",
          type: "string",
          title: "Small",
        }),
        defineField({
          name: "medium",
          type: "string",
          title: "Medium",
        }),
        defineField({
          name: "large",
          type: "string",
          title: "Large",
        }),
      ],
    }),
    defineField({
      name: "paddingTop",
      title: "Padding Top",
      type: "object",
      options: {
        columns: 3,
      },
      fields: [
        defineField({
          name: "small",
          type: "string",
          title: "Small",
        }),
        defineField({
          name: "medium",
          type: "string",
          title: "Medium",
        }),
        defineField({
          name: "large",
          type: "string",
          title: "Large",
        }),
      ],
    }),
    defineField({
      name: "scrollMargin",
      title: "Scroll Margin",
      type: "object",
      options: {
        columns: 3,
      },
      fields: [
        defineField({
          name: "small",
          type: "string",
          title: "Small",
        }),
        defineField({
          name: "medium",
          type: "string",
          title: "Medium",
        }),
        defineField({
          name: "large",
          type: "string",
          title: "Large",
        }),
      ],
    }),
    defineField({
      name: "hide",
      title: "Hide",
      type: "object",
      options: {
        columns: 3,
      },
      fields: [
        defineField({
          name: "small",
          type: "boolean",
          title: "Small",
        }),
        defineField({
          name: "medium",
          type: "boolean",
          title: "Medium",
        }),
        defineField({
          name: "large",
          type: "boolean",
          title: "Large",
        }),
      ],
    }),
  ],
});
