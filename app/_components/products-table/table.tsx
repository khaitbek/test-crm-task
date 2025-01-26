import { DataTable } from "@/components/data-table";
import type { IProduct } from "@/src/entities/product.model";
import { columns } from "./columns";

interface Props {
  products: IProduct[];
}

export function ProductsTable({ products }: Props) {
  return (
    <DataTable
      classNames={{
        container: "max-h-[80vh] overflow-auto",
      }}
      columns={columns}
      data={products}
    />
  );
}
