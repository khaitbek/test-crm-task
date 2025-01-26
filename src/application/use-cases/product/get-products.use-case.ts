import type { IProductRepository } from "../../repositories/product.repository.interface";

type Ctx = {
  productRepository: IProductRepository;
};

export type IGetAllProductsUseCase = typeof getProductsUseCase;

export async function getProductsUseCase(ctx: Ctx) {
  const { productRepository } = ctx;

  const data = await productRepository.getAll();

  return data;
}
