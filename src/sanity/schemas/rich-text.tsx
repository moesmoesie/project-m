import React from "react";

export default {
  name: "rich-text",
  title: "Rich Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "link",
            fields: [
              {
                name: "link",
                type: "link",
              },
            ],
          },
        ],
      },
    },
  ],
};
