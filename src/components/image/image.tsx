import React from "react";
import { z } from "zod";

export const Image: React.FC<ImageType> = ({ lazy = true, alt = "", ...props }) => {
  let src = props?.src;

  const lqip = props?.metadata?.lqip;

  if (props._type === "sanity.imageAsset") {
    const url = new URL(props.url ?? "");
    url.searchParams.append("auto", "format");
    if (props.width) url.searchParams.append("w", props.width);
    if (props.height) url.searchParams.append("h", props.height);
    src = url.toString();
  }

  return (
    <>
      {lqip && props?.withPlaceholder && <img width={props.width} height={props?.height} className={props?.className} src={lqip} alt={alt} />}

      <img width={props.width} height={props?.height} className={props?.className} src={src} alt={alt} />
    </>
  );
};

export const ImageZod = z.object({
  src: z.string().optional(),
  lazy: z.boolean().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  className: z.string().optional(),
  alt: z.string().optional(),
  _type: z.string().optional(),
  url: z.string().optional(),
  withPlaceholder: z.boolean().optional(),
  metadata: z
    .object({
      lqip: z.string().optional(),
    })
    .optional(),
});

export type ImageType = z.infer<typeof ImageZod>;

export default Image;
