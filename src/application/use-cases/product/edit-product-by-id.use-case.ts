import type { IEditProductById, IProduct } from "@/src/entities/product.model";
import type { IProductRepository } from "../../repositories/product.repository.interface";

interface Ctx {
  productRepository: IProductRepository;
  productId: IProduct["id"];
  updatedValues: IEditProductById;
}

export async function editProductByIdUseCase({
  productId,
  updatedValues,
  productRepository,
}: Ctx) {
  return await productRepository.updateById(productId, updatedValues);
}
