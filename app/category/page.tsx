import { CategoryRepository } from "@/src/infrastructure/repositories/category.repository";

export default async function CategoryPage() {
  const repository = new CategoryRepository();
  const categories = await repository.getAll();

  return <div>{categories.length} categories found</div>;
}
