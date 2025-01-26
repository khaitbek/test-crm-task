"use client";

import { Button } from "@/components/button";
import type { IProduct } from "@/src/entities/product.model";
import { useState } from "react";
import { toast } from "sonner";
import { removeProductFromCart } from "../actions";

interface Props {
  productId: IProduct["id"];
}

export function RemoveProductFromCart({ productId }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleRemove() {
    try {
      setIsLoading(true);
      toast.loading("Deleting...", {
        id: `remove-product-from-cart-${productId}`,
      });
      await removeProductFromCart(productId);
      toast.dismiss(`remove-product-from-cart-${productId}`);
      toast.success("Successfully deleted!");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button variant="destructive" disabled={isLoading} onClick={handleRemove}>
      Remove from cart
    </Button>
  );
}
