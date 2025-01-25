import { z } from "zod";

export const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type ICategory = z.infer<typeof categorySchema>;
