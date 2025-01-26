"use client";

import { EditProductByIdForm } from "@/app/_components/edit-product/form";
import { useProductStore } from "@/app/_store/use-product-store";
import { toast } from "sonner";

export function EditProductById() {
  const selectedProduct = useProductStore((state) => state.selectedProduct);
  const setIsActionDialogOpen = useProductStore(
    (state) => state.setIsActionDialogOpen
  );
  if (selectedProduct === undefined) return;

  return (
    <EditProductByIdForm
      onSuccess={() => {
        setIsActionDialogOpen(false);
        toast.success("Edited!");
      }}
      onError={(error) => {
        toast.error("Something went wrong!");
      }}
      product={selectedProduct}
    />
  );
}
