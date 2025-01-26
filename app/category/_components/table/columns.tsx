import type { ICategory } from "@/src/entities/category.model";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ICategory>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
];
