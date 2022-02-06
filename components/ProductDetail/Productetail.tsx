import { ArrowBackIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import slugify from "slugify";
import { RootState } from "../../redux/store";
import { ProductType } from "../../types";
import Rating from "../MainContent/Rating";
import ReviewSection from "./ReviewSection";

const Productetail = () => {
	const router = useRouter();
	let product: ProductType = useSelector(
		(state: RootState) => state.routeProduct
	);
	const productList = useSelector((state: RootState) => state.products);
	return (
		<Box w={{ md: "80%", sm: "90%" }} p={"1rem"} margin={"auto"}>
			<Head>
				<title>{product.title}</title>
			</Head>
			{/* Go back button */}
			<Stack direction={{ lg: "row", md: "column" }} spacing={2}>
				<Button
					leftIcon={<ArrowBackIcon />}
					variant="solid"
					colorScheme={"green"}
					onClick={() => router.push("/")}
				>
					Explore Products
				</Button>
			</Stack>
			{/*
				Flex Box - 
				- One side - Image, other side - Details
			*/}
			<Flex
				pt={"2rem"}
				direction={{ md: "row", sm: "column" }}
				align={{ sm: "center" }}
			>
				<Flex flex={1} align={"center"} justify={"center"}>
					<Image
						src={product.image}
						width={"50%"}
						height={"auto"}
						alt={product.title}
					/>
				</Flex>
				<Stack flex={1}>
					<Heading>{product.title}</Heading>
					<Text color={"gray.600"}>{product.description}</Text>
					<Rating
						numReviews={product.rating?.count}
						rating={product.rating?.rate}
					/>
					<Heading size={"lg"}>{`$${product.price}`}</Heading>
				</Stack>
			</Flex>
			{/* Reviews */}
			<ReviewSection product={product} />
		</Box>
	);
};

export default Productetail;
