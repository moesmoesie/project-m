import { defineField } from "sanity";
import { createModulePreview } from "../../sanity/sanity.helpers";
import { AiOutlineHome } from "react-icons/ai";

export default defineField({
  name: "landing-home",
  type: "object",
  title: "Landing Home",
  icon: AiOutlineHome,
  preview: createModulePreview("Landing Home", AiOutlineHome),
  fields: [
    defineField({
      name: "title",
      type: "rich-text",
      title: "Title",
    }),
    defineField({
      name: "module",
      title: "Module Settings",
      type: "module",
    }),
  ],
});
