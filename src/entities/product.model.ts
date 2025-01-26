import { z } from "zod";
import { categorySchema } from "./category.model";

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  cover: z.string().optional(),
  category: categorySchema,
});

export type IProduct = z.infer<typeof productSchema>;

export const addNewProductSchema = productSchema
  .pick({
    name: true,
    description: true,
    cover: true,
  })
  .merge(
    z.object({
      category: z.string(),
    })
  );

export type IAddNewProduct = z.infer<typeof addNewProductSchema>;

export const editProductByIdSchema = productSchema
  .pick({
    name: true,
    description: true,
    cover: true,
  })
  .partial()
  .merge(
    z.object({
      category: z.string(),
    })
  );

export type IEditProductById = z.infer<typeof editProductByIdSchema>;
