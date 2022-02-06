import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainContent, Navbar } from "../components/";
import { putProducts } from "../redux/actions/productActions";
import { Layout } from "../components";
import { RootState } from "../redux/store";
import { ProductType } from "../types";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import { addUserToStore } from "../redux/actions/userActions";
import { UserType } from "../types/user/userType";
const Home: NextPage = () => {
	const dispatch = useDispatch();
	const products: ProductType[] = useSelector((state: RootState) => {
		return state.products;
	});
	const user: UserType = useSelector((state: RootState) => {
		return state.user;
	});
	useEffect(() => {
		if (!products.length) {
			dispatch(putProducts());
		}
	}, []);
	if (!products.length) {
		return (
			<Flex w={"100%"} justify={"center"} h={"60vh"} align={"center"}>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</Flex>
		);
	}
	return <MainContent />;
};

export default Home;
