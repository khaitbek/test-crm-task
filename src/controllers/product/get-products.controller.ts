import type { IGetAllProductsUseCase } from "@/src/application/use-cases/product/get-products.use-case";
import type { IProduct } from "@/src/entities/product.model";
import { ProductRepository } from "@/src/infrastructure/repositories/product.repository";
import type { IGetAllProductsResponse } from "@/src/presentation/dtos/product.dto";

export function presenter(response: IGetAllProductsResponse): {
  page: number;
  limit: number;
  products: IProduct[];
} {
  return {
    limit: response.limit,
    page: 0,
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
  };
}

export type IGetAllProductsController = ReturnType<
  typeof getAllProductsController
>;

type Ctx = {
  getAllProductsUseCase: IGetAllProductsUseCase;
};

export async function getAllProductsController(ctx: Ctx) {
  const productRepository = new ProductRepository();
  const { getAllProductsUseCase } = ctx;
  const products = await getAllProductsUseCase({
    productRepository,
  });

  return presenter(products);
}
