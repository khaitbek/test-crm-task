import type { IRemoveProductFromCartUseCase } from "@/src/application/use-cases/cart/remove-product.use-case";
import type { IProduct } from "@/src/entities/product.model";
import { CartRepository } from "@/src/infrastructure/repositories/cart.repository";
import type { IGetCartByIdResponse } from "@/src/presentation/dtos/cart.dto";

export function presenter(response: IGetCartByIdResponse): {
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

export type IRemoveProductFromCartController = ReturnType<
  typeof removeProductFromCartController
>;

type Ctx = {
  removeProductFromCartUseCase: IRemoveProductFromCartUseCase;
  productId: IProduct["id"];
};

export async function removeProductFromCartController(ctx: Ctx) {
  const cartRepository = new CartRepository();
  const { removeProductFromCartUseCase, productId } = ctx;
  const products = await removeProductFromCartUseCase({
    productId,
    cartRepository,
  });

  return presenter(products);
}
