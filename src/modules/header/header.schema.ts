import { defineField, defineType } from "sanity";
import { createModulePreview } from "../../sanity/sanity.helpers";
import { CgToolbarTop } from "react-icons/cg";

export default defineType({
  name: "header",
  title: "Header",
  type: "object",
  icon: CgToolbarTop,
  preview: createModulePreview("Header", CgToolbarTop),
  fields: [
    defineField({
      name: "logo",
      type: "string",
      title: "Logo",
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
