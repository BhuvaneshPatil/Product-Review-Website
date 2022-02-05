import React from "react";

export type ProductType = {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
};

export type ProductCardProps = {
	product: ProductType;
	onClick?: React.MouseEvent;
};

export type ProductReviewSectionProps = {
	product: ProductType;
};
