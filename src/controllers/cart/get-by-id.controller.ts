import type { IGetCartByIdUseCase } from "@/src/application/use-cases/product/get-by-id.use-case";
import type { IProduct } from "@/src/entities/product.model";
import { CartRepository } from "@/src/infrastructure/repositories/cart.repository";
import type { IGetCartByIdResponse } from "@/src/presentation/dtos/cart.dto";

export function presenter(response: IGetCartByIdResponse): {
  products: IProduct[];
  totalProducts: number;
} {
  console.log({
    response,
  });
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

export type IGetCartByIdController = ReturnType<typeof getCartByIdController>;

type Ctx = {
  getCartByIdUseCase: IGetCartByIdUseCase;
};

export async function getCartByIdController(ctx: Ctx) {
  const cartRepository = new CartRepository();
  const { getCartByIdUseCase } = ctx;
  const products = await getCartByIdUseCase({
    cartRepository,
  });

  return presenter(products);
}
