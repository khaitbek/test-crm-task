import { IAddProductToCartUseCase } from "@/src/application/use-cases/cart/add-product.use-case";
import type { IProduct } from "@/src/entities/product.model";
import { CartRepository } from "@/src/infrastructure/repositories/cart.repository";
import type { IAddProductToCartResponse } from "@/src/presentation/dtos/cart.dto";

export function presenter(response: IAddProductToCartResponse): {
  products: IProduct[];
  totalProducts: number;
} {
  return {
    products: response.products.map((product) => ({
      id: product.id,
      cover: product.thumbnail,
      description: product.description,
      category: {
        id: product.category,
        name: product.category,
      },
      name: product.title,
    })),
    totalProducts: response.totalProducts,
  };
}

export type IAddProductToCartController = ReturnType<
  typeof addProductToCartController
>;

type Ctx = {
  addProductToCartUseCase: IAddProductToCartUseCase;
  product: IProduct;
};

export async function addProductToCartController(ctx: Ctx) {
  const cartRepository = new CartRepository();

  const { addProductToCartUseCase, product } = ctx;

  const products = await addProductToCartUseCase({
    product,
    cartRepository,
  });

  return presenter(products);
}
