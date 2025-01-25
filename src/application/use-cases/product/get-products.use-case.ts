import type { IProductRepository } from "../../repositories/product.repository.interface";

type Ctx = {
  productRepository: IProductRepository;
};

export async function getProductsUseCase(ctx: Ctx) {
  const { productRepository } = ctx;

  return await productRepository.getAll();
}
