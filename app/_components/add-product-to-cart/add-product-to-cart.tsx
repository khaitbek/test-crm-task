"use client";

import { addProductToCart } from "@/app/actions";
import { removeProductFromCart } from "@/app/cart/actions";
import { Button } from "@/components/button";
import { IProduct } from "@/src/entities/product.model";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  product: IProduct;
}

export function AddProductToCart({ product }: Props) {
  const [isAdded, setIsAdded] = useState(false);

  async function handleAdd() {
    setIsAdded(true);
    try {
      await addProductToCart(product);
      toast.success("Successfully added!");
    } catch (error) {
      setIsAdded(false);
      toast.error("Something went wrong!");
    }
  }

  async function handleRemove() {
    setIsAdded(false);
    try {
      await removeProductFromCart(product.id);
      toast.success("Successfully deleted!");
    } catch (error) {
      setIsAdded(true);
      toast.error("Something went wrong!");
    }
  }

  if (isAdded) {
    return (
      <Button variant="destructive" onClick={handleRemove}>
        Remove from cart
      </Button>
    );
  }

  return <Button onClick={handleAdd}>Add to cart</Button>;
}
