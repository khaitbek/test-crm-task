import type { IProduct } from "@/src/entities/product.model";
import type { ICartRepository } from "../../repositories/cart.repository.interface";

interface Ctx {
  cartRepository: ICartRepository;
  product: IProduct;
}

export type IAddProductToCartUseCase = typeof addProductToCartUseCase;

export async function addProductToCartUseCase(ctx: Ctx) {
  const { cartRepository, product } = ctx;

  const { category, description, id, name, cover } = product;

  return await cartRepository.addProduct({
    id,
    category: category.name,
    description,
    title: name,
    thumbnail: cover,
  });
}
