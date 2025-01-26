import type { ICartRepository } from "@/src/application/repositories/cart.repository.interface";
import type { IProductDto } from "@/src/domain/dtos/product.domain.dto";
import type {
  IAddProductToCartResponse,
  IGetCartByIdResponse,
  IRemoveProductFromCartResponse,
} from "@/src/presentation/dtos/cart.dto";

export class CartRepository implements ICartRepository {
  async getCartById(): Promise<IGetCartByIdResponse> {
    const response = await fetch("https://dummyjson.com/carts/1");
    return await response.json();
  }

  async addProduct(
    product: Partial<IProductDto>
  ): Promise<IAddProductToCartResponse> {
    const response = await fetch("https://dummyjson.com/carts/1", {
      method: "PUT",
      body: JSON.stringify({
        merge: true,
        products: [product],
      }),
    });
    const data = await response.json();
    return data;
  }

  async removeProduct(
    id: IProductDto["id"]
  ): Promise<IRemoveProductFromCartResponse> {
    const oldProducts = (await this.getCartById()).products;
    const filteredProducts = oldProducts.filter((product) => product.id !== id);

    const response = await fetch("https://dummyjson.com/carts/1", {
      method: "PATCH",
      body: JSON.stringify({
        products: filteredProducts,
      }),
    });

    const data = await response.json();
    return data;
  }
}
