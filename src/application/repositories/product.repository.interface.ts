import type { IProduct } from "@/src/entities/product.model";
import type {
  IAddNewProductRequestData,
  IAddNewProductResponse,
  IDeleteProductByIdResponse,
  IGetAllProductsResponse,
  IGetProductByIdResponse,
  IUpdateProductByIdRequestData,
  IUpdateProductByIdResponse,
} from "@/src/presentation/dtos/product.dto";

export interface IProductRepository {
  getAll(): Promise<IGetAllProductsResponse>;
  getById(id: IProduct["id"]): Promise<IGetProductByIdResponse>;
  updateById(
    id: IProduct["id"],
    updatedFields: IUpdateProductByIdRequestData
  ): Promise<IUpdateProductByIdResponse>;
  deleteById(id: IProduct["id"]): Promise<IDeleteProductByIdResponse>;
  addNew(product: IAddNewProductRequestData): Promise<IAddNewProductResponse>;
}
