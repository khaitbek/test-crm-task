"use client";

import { useProductStore } from "@/app/_store/use-product-store";
import { Button } from "@/components/button";
import { PlusIcon } from "lucide-react";
import { useShallow } from "zustand/shallow";

export function CreateNewProductTrigger() {
  const { setIsActionDialogOpen, setSelectedAction } = useProductStore(
    useShallow((state) => ({
      setIsActionDialogOpen: state.setIsActionDialogOpen,
      setSelectedAction: state.setSelectedAction,
    }))
  );

  function handleTriggerNewProduct() {
    setIsActionDialogOpen(true);
    setSelectedAction("addNewProduct");
  }

  return (
    <Button onClick={handleTriggerNewProduct} className="ml-6">
      Create new
      <PlusIcon className="ml-2" />
    </Button>
  );
}
