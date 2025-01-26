"use client";

import { useProductStore } from "@/app/_store/use-product-store";
import { deleteProductById } from "@/app/actions";
import { Button } from "@/components/button";
import type { IProduct } from "@/src/entities/product.model";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, Trash } from "lucide-react";
import { toast } from "sonner";

export const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    id: "actions",
    cell(props) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const store = useProductStore();

      const product = props.cell.row.original;

      async function handleEdit() {
        store.setSelectedProduct(product);
        store.setSelectedAction("editProductById");
        store.setIsActionDialogOpen(true);
      }

      async function handleDelete() {
        toast.loading("O'chirilmoqda...", {
          dismissible: true,
          duration: Infinity,
          id: "deleteProductToast",
        });
        try {
          await deleteProductById(product.id);
          alert("Deleted!!!");
          toast.dismiss("deleteProductToast");
          toast.success("O'chirildi!");
        } catch (error) {
          toast.error("Xatolik yuz berdi");
          console.log(error);
        }
      }

      return (
        <div className="flex gap-3 items-center">
          <Button onClick={handleEdit} size="icon" variant="outline">
            <EditIcon />
          </Button>
          <Button onClick={handleDelete} size="icon" variant="destructive">
            <Trash />
          </Button>
        </div>
      );
    },
  },
];
