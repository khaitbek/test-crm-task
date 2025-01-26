import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { getCartByIdUseCase } from "@/src/application/use-cases/product/get-by-id.use-case";
import { getCartByIdController } from "@/src/controllers/cart/get-by-id.controller";
import { ProductList } from "@/src/presentation/views/products/product-list";
import { RemoveProductFromCart } from "./_components/remove-product-from-cart";

export async function getCart() {
  return await getCartByIdController({
    getCartByIdUseCase: getCartByIdUseCase,
  });
}

export default async function Page() {
  const { products } = await getCart();

  return (
    <>
      <ul className="grid grid-cols-3 gap-3">
        <ProductList
          products={products}
          ProductPresenter={({ product }) => (
            <li>
              <Card className="cursor-pointer hover:bg-secondary transition-colors">
                <CardHeader>
                  <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                  <img
                    alt={product.description}
                    width={300}
                    height={300}
                    src={product.cover}
                  />
                </CardHeader>
                <CardContent className="line-clamp-2 !overflow-hidden">
                  {product.description}
                </CardContent>
                <CardFooter>
                  <RemoveProductFromCart productId={product.id} />
                </CardFooter>
              </Card>
            </li>
          )}
        />
      </ul>
    </>
  );
}
