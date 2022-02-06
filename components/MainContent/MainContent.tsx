import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ProductType } from "../../types";
import ProductList from "./ProductList";

const MainContent = () => {
	const products: ProductType[] = useSelector((state: RootState) => {
		return state.products;
	});
	return (
		<Box mt={"2rem"}>
			<ProductList products={products} />
		</Box>
	);
};

export default MainContent;
