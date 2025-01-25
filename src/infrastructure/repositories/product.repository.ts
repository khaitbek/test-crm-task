import axios from "axios";

import type { IProductRepository } from "@/src/application/repositories/product.repository.interface";
import type { IProduct } from "@/src/entities/product.model";
import type {
  IDeleteProductByIdResponse,
  IGetAllProductsResponse,
  IGetProductByIdResponse,
  IUpdateProductByIdRequestData,
  IUpdateProductByIdResponse,
} from "@/src/presentation/dtos/product.dto";

export class ProductRepository implements IProductRepository {
  async getAll(): Promise<IGetAllProductsResponse> {
    const response = await axios.get("https://dummyjson.com/products");

    return response.data;
  }

  async getById(id: IProduct["id"]): Promise<IGetProductByIdResponse> {
    const product = await axios.get(`https://dummyjson.com/products/${id}`);
    return product.data;
  }

  async updateById(
    id: IProduct["id"],
    updatedFields: IUpdateProductByIdRequestData
  ): Promise<IUpdateProductByIdResponse> {
    const response = await axios.put(`https://dummyjson.com/products/${id}`, {
      updatedFields,
    });

    return response.data;
  }

  async deleteById(id: IProduct["id"]): Promise<IDeleteProductByIdResponse> {
    const response = await axios.delete(`https://dummyjson.com/products/${id}`);

    return response.data;
  }
}
