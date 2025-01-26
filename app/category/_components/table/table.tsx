import { DataTable } from "@/components/data-table";
import type { ICategory } from "@/src/entities/category.model";
import { columns } from "./columns";

interface Props {
  categories: ICategory[];
}

export function Table({ categories }: Props) {
  return (
    <DataTable
      classNames={{
        container: "max-h-[85vh] overflow-auto",
      }}
      data={categories}
      columns={columns}
    />
  );
}
