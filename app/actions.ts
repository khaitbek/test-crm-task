"use server";

import { addProductToCartUseCase } from "@/src/application/use-cases/cart/add-product.use-case";
import { addProductToCartController } from "@/src/controllers/cart/add-product.controller";
import type { IProduct } from "@/src/entities/product.model";
import { ProductRepository } from "@/src/infrastructure/repositories/product.repository";
import { revalidatePath } from "next/cache";

export async function deleteProductById(id: IProduct["id"]) {
  const repository = new ProductRepository();
  const response = await repository.deleteById(id);

  revalidatePath("/");

  return response;
}

export async function addProductToCart(product: IProduct) {
  const response = await addProductToCartController({
    product,
    addProductToCartUseCase: addProductToCartUseCase,
  });

  revalidatePath("/cart");

  return response;
}
