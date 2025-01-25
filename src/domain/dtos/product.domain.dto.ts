import type { IDate } from "./date.domain.dto";

export interface IProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: IDate;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: IDate;
    updatedAt?: IDate;
    barcode?: string;
    qrCode?: string;
  };
  thumbnail?: string;
  images: string[];
  isDeleted?: boolean;
  deletedOn?: IDate;
}
