"use server";

import { removeProductFromCartUseCase } from "@/src/application/use-cases/cart/remove-product.use-case";
import { removeProductFromCartController } from "@/src/controllers/cart/remove-product-by-id.controller";
import { IProduct } from "@/src/entities/product.model";

export async function removeProductFromCart(id: IProduct["id"]) {
  return await removeProductFromCartController({
    productId: id,
    removeProductFromCartUseCase: removeProductFromCartUseCase,
  });
}
