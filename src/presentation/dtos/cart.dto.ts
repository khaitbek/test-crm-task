import type { IProductDto } from "@/src/domain/dtos/product.domain.dto";

export interface IGetCartByIdResponse {
  id: number;
  products: Partial<IProductDto>[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface IAddProductToCartResponse {
  id: number;
  products: Partial<IProductDto>[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface IRemoveProductFromCartResponse {
  id: number;
  products: Partial<IProductDto>[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
