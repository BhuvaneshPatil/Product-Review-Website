import {
	AspectRatio,
	Badge,
	Box,
	Button,
	Center,
	Flex,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import slugify from "slugify";
import { putRouteProduct } from "../../redux/actions/productActions";
import { ProductCardProps } from "../../types/product/productTypes";
import Rating from "./Rating";

const ProductCard = ({ product }: ProductCardProps) => {
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {}, []);
	return (
		<Box
			boxShadow={"lg"}
			w={{ lg: "23%", md: "45%", sm: "90%" }}
			borderRadius={"lg"}
			p={"3"}
			cursor={"pointer"}
			m={{ md: "1rem 0.5rem", sm: "auto" }}
			transition={"all 0.2s ease"}
			display={"flex"}
			flexDirection={"column"}
			position={"relative"}
			_hover={{ boxShadow: "dark-lg" }}
			overflowY={"hidden"}
			borderTop={"8px solid blue.300"}
			onClick={() => {
				dispatch(putRouteProduct(product));
				router.push(slugify(product.title));
			}}
		>
			<Image
				src={"/assets/svg.png"}
				alt={"SVG "}
				pos={"absolute"}
				filter={"hue-rotate(90deg)"}
				left={0}
				bottom={-3}
				opacity={0.5}
			/>
			<Box
				display={"flex"}
				alignItems="center"
				justifyContent={"center"}
				minH={"180px"}
				maxH={"180px"}
			>
				<Image
					src={product.image}
					alt={product.title}
					w="60%"
					m={"auto"}
					maxH={"inherit"}
				/>
			</Box>
			<Stack p={"2"} mt={"3"} pb={"1rem"}>
				{/* Product Name */}
				<Text as="h3" fontWeight={"semibold"} textAlign={"left"}>
					{product.title}
				</Text>
				{/* Description - for some products it's too long so we will strip it upto 100 chars */}
				<Text as={"p"} color={"gray.500"} textTransform={"capitalize"}>
					{`${product.description.slice(0, 100)}...`}
				</Text>
				{/* Product Category */}
				<Badge
					variant="subtle"
					colorScheme="green"
					alignSelf={"flex-start"}
					mt={"5px"}
					p={"5px"}
					borderRadius={"md"}
				>
					{product.category}
				</Badge>
				{/* Rating */}
				<Rating
					numReviews={product.rating.count}
					rating={product.rating.rate}
					price={Number(product.price)}
				/>
			</Stack>
			<Button
				marginTop={"auto"}
				isFullWidth
				backgroundColor={"green.400"}
				color={"gray.100"}
				_hover={{ color: "gray.700", backgroundColor: "greay.300" }}
			>
				Write a Review
			</Button>
		</Box>
	);
};

export default ProductCard;
