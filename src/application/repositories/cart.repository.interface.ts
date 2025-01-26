import type { IProductDto } from "@/src/domain/dtos/product.domain.dto";
import type {
  IAddProductToCartResponse,
  IGetCartByIdResponse,
  IRemoveProductFromCartResponse,
} from "@/src/presentation/dtos/cart.dto";

export interface ICartRepository {
  getCartById(): Promise<IGetCartByIdResponse>;
  addProduct(product: Partial<IProductDto>): Promise<IAddProductToCartResponse>;
  removeProduct(id: IProductDto["id"]): Promise<IRemoveProductFromCartResponse>;
}
