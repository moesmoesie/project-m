import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity/sanity.helpers";
import { CgToolbarBottom } from "react-icons/cg";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "object",
  icon: CgToolbarBottom,
  preview: createModulePreview("Footer", CgToolbarBottom),
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
