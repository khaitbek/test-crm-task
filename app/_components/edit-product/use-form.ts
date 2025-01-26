import {
  editProductByIdSchema,
  type IEditProductById,
} from "@/src/entities/product.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  product: IEditProductById;
}

export function useEditProductByIdForm({ product }: Props) {
  const form = useForm<IEditProductById>({
    resolver: zodResolver(editProductByIdSchema),
    defaultValues: {
      ...product,
    },
  });

  return {
    form,
  };
}
