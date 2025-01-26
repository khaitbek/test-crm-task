"use client";

import { useProductStore } from "@/app/_store/use-product-store";
import { AddNewProductForm } from "@/app/product/_components/create-new-product-trigger/form";
import { toast } from "sonner";
import { useShallow } from "zustand/shallow";

export function AddNewProduct() {
  const { setIsActionDialogOpen, setSelectedAction } = useProductStore(
    useShallow((state) => ({
      setIsActionDialogOpen: state.setIsActionDialogOpen,
      setSelectedAction: state.setSelectedAction,
    }))
  );

  return (
    <AddNewProductForm
      onError={() => {
        toast.error("Something went wrong!");
      }}
      onSuccess={() => {
        setIsActionDialogOpen(false);
        setSelectedAction(undefined);
        toast.success("Successfully added!");
      }}
    />
  );
}
