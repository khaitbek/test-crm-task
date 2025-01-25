import type { ICategory } from "@/src/entities/category.model";

export interface ICategoryRepository {
  getAll(): Promise<ICategory[]>;
}
