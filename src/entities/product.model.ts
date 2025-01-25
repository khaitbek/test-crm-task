import { z } from "zod";
import { categorySchema } from "./category.model";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  cover: z.string(),
  category: categorySchema,
});

export type IProduct = z.infer<typeof productSchema>;

export const addNewProductSchema = productSchema.pick({
  name: true,
  description: true,
  category: true,
  cover: true,
});

export type IAddNewProduct = z.infer<typeof addNewProductSchema>;

export const editProductByIdSchema = productSchema
  .pick({
    name: true,
    description: true,
    category: true,
    cover: true,
  })
  .partial();

export type IEditProductById = z.infer<typeof editProductByIdSchema>;
