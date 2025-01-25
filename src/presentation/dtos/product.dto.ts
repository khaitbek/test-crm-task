import type { IProductDto } from "@/src/domain/dtos/product.domain.dto";

export type IGetAllProductsResponse = {
  products: IProductDto[];
  total: number;
  skip: number;
  limit: number;
};

export type IGetProductByIdResponse = IProductDto;

export type IAddNewProductRequestData = IProductDto;
export type IAddNewProductResponse = IProductDto;

export type IUpdateProductByIdRequestData = Partial<Omit<IProductDto, "id">>;
export type IUpdateProductByIdResponse = IProductDto;

export type IDeleteProductByIdResponse = IProductDto;
