import type { IProduct } from "@/src/entities/product.model";
import { create } from "zustand";

interface IProductStore {
  selectedProduct?: IProduct;
  setSelectedProduct(product: IProduct): void;

  isActionDialogOpen: boolean;
  setIsActionDialogOpen(state: boolean): void;

  selectedAction?: "editProductById" | "addNewProduct";
  setSelectedAction(action: IProductStore["selectedAction"]): void;
}

export const useProductStore = create<IProductStore>((set) => ({
  isActionDialogOpen: false,
  selectedAction: undefined,
  selectedProduct: undefined,
  setIsActionDialogOpen(state) {
    return set({
      isActionDialogOpen: state,
    });
  },
  setSelectedProduct(product) {
    return set({
      selectedProduct: product,
    });
  },
  setSelectedAction(action) {
    return set({
      selectedAction: action,
    });
  },
}));
