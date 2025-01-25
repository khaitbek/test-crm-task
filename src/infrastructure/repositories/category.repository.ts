import type { ICategoryRepository } from "@/src/application/repositories/category.repository.interface";
import type { IGetAllCategoriesResponse } from "@/src/presentation/dtos/category.dto";
import axios from "axios";

export class CategoryRepository implements ICategoryRepository {
  async getAll(): Promise<IGetAllCategoriesResponse> {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  }
}
