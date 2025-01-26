"use server";

import { editProductByIdUseCase } from "@/src/application/use-cases/product/edit-product-by-id.use-case";
import type {
  IAddNewProduct,
  IEditProductById,
  IProduct,
} from "@/src/entities/product.model";
import { ProductRepository } from "@/src/infrastructure/repositories/product.repository";
import { revalidatePath } from "next/cache";

export async function editProductById(
  id: IProduct["id"],
  product: IEditProductById
) {
  const repository = new ProductRepository();

  const response = await editProductByIdUseCase({
    productId: id,
    productRepository: repository,
    updatedValues: product,
  });

  revalidatePath("/");

  return response;
}

export async function addNewProduct(payload: IAddNewProduct) {
  const repository = new ProductRepository();

  const response = await repository.addNew({
    title: payload.name,
    category: payload.category,
    description: payload.description,
    thumbnail: payload.cover,
  });

  revalidatePath("/");

  return response;
}
