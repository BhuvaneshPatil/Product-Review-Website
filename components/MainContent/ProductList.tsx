import { Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import type { ProductListProps, ProductType } from "../../types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: ProductListProps) => {
	return (
		<Flex
			wrap={"wrap"}
			m={"auto"}
			justifyContent={"space-between"}
			maxW={"90%"}
		>
			{products.map((item) => (
				<ProductCard product={item} key={`${item.title}`} />
			))}
		</Flex>
	);
};

export default ProductList;
