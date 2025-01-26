import { CategoryRepository } from "@/src/infrastructure/repositories/category.repository";
import { Table } from "./_components/table/table";

export default async function CategoryPage() {
  const repository = new CategoryRepository();
  const categories = await repository.getAll();

  return (
    <Table
      categories={categories.map((category) => ({
        id: category.name,
        name: category.name,
      }))}
    />
  );
}
