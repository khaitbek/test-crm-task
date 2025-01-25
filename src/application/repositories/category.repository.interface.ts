import type { IGetAllCategoriesResponse } from "@/src/presentation/dtos/category.dto";

export interface ICategoryRepository {
  getAll(): Promise<IGetAllCategoriesResponse>;
}
