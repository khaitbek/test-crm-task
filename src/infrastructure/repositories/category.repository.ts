import type { ICategoryRepository } from "@/src/application/repositories/category.repository.interface";
import type { ICategory } from "@/src/entities/category.model";

export class CategoryRepository implements ICategoryRepository {
  async getAll(): Promise<ICategory[]> {
    return [];
  }
}
