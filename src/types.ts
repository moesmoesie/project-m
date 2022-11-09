import { z } from "zod";

export const ModuleZod = z.object({
  module: z
    .object({
      identifier: z.string().optional(),
      scrollMargin: z
        .object({
          small: z.string().optional(),
          medium: z.string().optional(),
          large: z.string().optional(),
        })
        .optional(),
      background: z.string().optional(),
      paddingTop: z
        .object({
          small: z.string().optional(),
          medium: z.string().optional(),
          large: z.string().optional(),
        })
        .optional(),
      paddingBottom: z
        .object({
          small: z.string().optional(),
          medium: z.string().optional(),
          large: z.string().optional(),
        })
        .optional(),
      hide: z
        .object({
          small: z.boolean().optional(),
          medium: z.boolean().optional(),
          large: z.boolean().optional(),
        })
        .optional(),
    })
    .nullable()
    .optional(),
});

export const RichTextZod = z.union([z.array(z.any()), z.string()]);

export type ModuleType = z.infer<typeof ModuleZod>;
