import {
  addNewProductSchema,
  type IAddNewProduct,
} from "@/src/entities/product.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function useAddNewProductForm() {
  const form = useForm<IAddNewProduct>({
    resolver: zodResolver(addNewProductSchema),
  });

  return {
    form,
  };
}
