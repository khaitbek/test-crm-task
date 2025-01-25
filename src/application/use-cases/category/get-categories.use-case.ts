import type { ICategoryRepository } from "../../repositories/category.repository.interface";

type Ctx = {
  categoryRepository: ICategoryRepository;
};

export async function getCategoriesUseCase(ctx: Ctx) {
  const { categoryRepository } = ctx;
  return await categoryRepository.getAll();
}
