import { groq } from "next-sanity";

export const SlugQuery = groq`
  *[defined(slug.current)]{
      'params': {
        "slug": string::split(slug.current,"/")[@ != ""]
      }
  }
`;

export const PageQuery = groq`
    *[slug.current == $slug]{
        _id,
        seo,
        modules[]{
          _type,
          _id,
          module,
          _type == "header" => {
            logo
          },
          _type == "footer" => {
            title
          },
          _type == "landing-home" => {
            title
          }
        }
    }
`;
