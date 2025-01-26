import type { IProduct } from "@/src/entities/product.model";
import type { ICartRepository } from "../../repositories/cart.repository.interface";

interface Ctx {
  cartRepository: ICartRepository;
  productId: IProduct["id"];
}

export type IRemoveProductFromCartUseCase = typeof removeProductFromCartUseCase;

export async function removeProductFromCartUseCase({
  productId,
  cartRepository,
}: Ctx) {
  return await cartRepository.removeProduct(productId);
}
