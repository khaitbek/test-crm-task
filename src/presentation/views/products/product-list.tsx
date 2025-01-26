import type { IProduct } from "@/src/entities/product.model";

interface ProductPresenterProps {
  product: IProduct;
}

interface Props {
  products: IProduct[];
  ProductPresenter<T extends ProductPresenterProps>(props: T): JSX.Element;
}

export function ProductList({ products, ProductPresenter }: Props) {
  return products.map((product) => (
    <ProductPresenter product={product} key={product.id} />
  ));
}
