import type { ProductType } from "../product/productTypes";

export type ProductListProps = { products: ProductType[] };

export type RatingProps = {
	rating: number;
	numReviews: number;
	price?: number;
};
