import { getProductsUseCase } from "@/src/application/use-cases/product/get-products.use-case";
import { getAllProductsController } from "@/src/controllers/product/get-products.controller";
import { ProductActionDialog } from "@/src/presentation/views/products/action-dialog";
import { ProductsTable } from "../_components/products-table/table";
import { CreateNewProductTrigger } from "./_components/create-new-product-trigger/trigger";

async function getProducts() {
  return await getAllProductsController({
    getAllProductsUseCase: getProductsUseCase,
  });
}

export default async function ProductPage() {
  const { products } = await getProducts();

  return (
    <>
      <div className="flex justify-end mb-3">
        <CreateNewProductTrigger />
      </div>
      <ProductsTable products={products} />
      <ProductActionDialog />
    </>
  );
}
