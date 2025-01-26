import { getCartByIdUseCase } from "@/src/application/use-cases/product/get-by-id.use-case";
import { getCartByIdController } from "@/src/controllers/cart/get-by-id.controller";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

async function getCart() {
  return getCartByIdController({
    getCartByIdUseCase: getCartByIdUseCase,
  });
}

export async function CartQuantity() {
  const { totalProducts } = await getCart();

  return (
    <Link href="/cart" className="relative mb-3">
      <ShoppingCart />
      <span className="w-4 h-4 p-1 flex items-center justify-center rounded-full bg-destructive text-white absolute top-0 left-0">
        {totalProducts}
      </span>
    </Link>
  );
}
