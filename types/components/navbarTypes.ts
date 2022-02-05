import React from "react";
import { ProductType } from "../product/productTypes";

export type NavbarContainerProps = {
	children: React.ReactNode;
};

export type SearchBarProps = {
	searchString: string;
	productList: ProductType[] | [];
	notFound: boolean;
	handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
