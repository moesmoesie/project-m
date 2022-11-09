import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const myPortableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <span>{children}</span>,
  },
  marks: {
    em: ({ children }) => <em className="italic">{children}</em>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    link: ({ children, value }) => {
      return (
        <a href={value?.link?.href} className="underline">
          {children}
        </a>
      );
    },
  },
  unknownMark: ({ children }) => <span>{children}</span>,
};

export const RichText: React.FC<{ value: any }> = (props) => {
  if (typeof props.value == "string") {
    return <span>{props.value}</span>;
  }

  return <PortableText value={props.value} components={myPortableTextComponents} />;
};
