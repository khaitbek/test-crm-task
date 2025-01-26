"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import { useShallow } from "zustand/shallow";

import { useProductStore } from "@/app/_store/use-product-store";
import { AddNewProduct } from "./add-new-product";
import { EditProductById } from "./edit-product-by-id";

export function ProductActionDialog() {
  const { isActionDialogOpen, selectedAction, setIsActionDialogOpen } =
    useProductStore(
      useShallow((state) => ({
        isActionDialogOpen: state.isActionDialogOpen,
        selectedAction: state.selectedAction,
        setIsActionDialogOpen: state.setIsActionDialogOpen,
      }))
    );

  return (
    <Dialog open={isActionDialogOpen} onOpenChange={setIsActionDialogOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {selectedAction === "addNewProduct" && "Yangi mahsulot qo'shish"}
            {selectedAction === "editProductById" && "Ma'lumotlarni yangilash"}
          </DialogTitle>
        </DialogHeader>
        {selectedAction === "editProductById" && <EditProductById />}
        {selectedAction === "addNewProduct" && <AddNewProduct />}
      </DialogContent>
    </Dialog>
  );
}
