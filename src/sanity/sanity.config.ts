// IMPORT MODULES
import FooterSchema from "../modules/footer/footer.schema";
import HeaderSchema from "../modules/header/header.schema";
import LandingHomeSchema from "../modules/landing-home/landing-home.schema";
import SpacerSchema from "../modules/spacer/spacer.schema";

// IMPORT COMPONENTS
import PageSchema from "./schemas//page";
import RichTextSchema from "./schemas//rich-text";
import LinkSchema from "./schemas/link";
import ModuleSchema from "./schemas//module";
import SeoSchema from "./schemas//seo";

// END SCHEMA IMPORTS
import { deskTool } from "sanity/desk";
import { defineConfig } from "sanity";

const allSchemas = [SeoSchema, FooterSchema, HeaderSchema, LandingHomeSchema, SpacerSchema, PageSchema, RichTextSchema, LinkSchema, ModuleSchema];

import BaseConfig from "./sanity.base-config";
import productionUrl from "./structure/production-url";

const Config = defineConfig({
  ...BaseConfig,
  plugins: [deskTool()],
  basePath: "/studio",
  title: "Studio",
  schema: {
    types: allSchemas,
  },

  document: {
    productionUrl,
  },
});

export default Config;
