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
import LoadingSpinner from "../components/Layout/LoadingSpinner";
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
		return <LoadingSpinner />;
	}
	return <MainContent />;
};

export default Home;
