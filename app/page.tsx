import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { getProductsUseCase } from "@/src/application/use-cases/product/get-products.use-case";
import { getAllProductsController } from "@/src/controllers/product/get-products.controller";
import { ProductActionDialog } from "@/src/presentation/views/products/action-dialog";
import { ProductList } from "@/src/presentation/views/products/product-list";
import { AddProductToCart } from "./_components/add-product-to-cart/add-product-to-cart";

async function getProducts() {
  return await getAllProductsController({
    getAllProductsUseCase: getProductsUseCase,
  });
}

export default async function Home() {
  const { products } = await getProducts();

  return (
    <section className="p-3">
      <div className="flex gap-6">
        <ul className="grid grid-cols-3 gap-3">
          <ProductList
            products={products}
            ProductPresenter={({ product }) => (
              <li>
                <Card className="cursor-pointer hover:bg-secondary transition-colors">
                  <CardHeader>
                    <CardTitle className="line-clamp-1">
                      {product.name}
                    </CardTitle>
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
                  <CardFooter className="pt-3">
                    <AddProductToCart product={product} />
                  </CardFooter>
                </Card>
              </li>
            )}
          />
        </ul>
        <ProductActionDialog />
      </div>
    </section>
  );
}
