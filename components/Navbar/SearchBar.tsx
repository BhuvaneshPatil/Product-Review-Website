import {
	Box,
	Flex,
	Input,
	InputGroup,
	Text,
	InputLeftElement,
	List,
	ListItem,
	Divider,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { SearchBarProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import slugify from "slugify";
import { putRouteProduct } from "../../redux/actions/productActions";

const SearchBar = ({
	handleQueryChange,
	productList,
	notFound,
	searchString,
}: SearchBarProps) => {
	// handle esc key and outside click
	const dispatch = useDispatch();
	const [show, setShow] = useState(true);
	const router = useRouter();
	const isMobile = useMediaQuery("(max-width: 400px)");

	return (
		<Box
			position={"relative"}
			ml={"1rem"}
			mr={"1rem"}
			mt={{ sm: "0.5rem", md: "0" }}
			w={{ md: "60%", sm: "100%" }}
			order={{ sm: 3, md: 2 }}
		>
			<InputGroup
				verticalAlign={"center"}
				boxShadow={"md"}
				borderRadius={"lg"}
			>
				<InputLeftElement h={"100%"}>
					<Search2Icon color={"gray.500"} />
				</InputLeftElement>
				<Input
					placeholder="Search Product"
					size="lg"
					onChange={handleQueryChange}
					onFocus={() => {
						setShow(true);
					}}
					onBlur={() => {
						setShow(false);
					}}
				/>
			</InputGroup>
			<Box
				display={!!searchString && show ? "block" : "none"}
				pos={"absolute"}
				left={"0"}
				right={"0"}
				top={"90%"}
				boxShadow={"md"}
				minH={"50px"}
				width={"100%"}
				backgroundColor={"#fff"}
				border={"1.5px solid"}
				borderColor={"rgb(49, 130, 206)"}
				borderBottomRadius={"lg"}
				zIndex={1000}
				maxH={"300px"}
				borderTopWidth={"0"}
				overflowY={"scroll"}
			>
				{/* List will be displayed here */}
				{notFound ? (
					<Text
						textAlign={"center"}
						pt={"1rem"}
					>{`No search result for "${searchString}"`}</Text>
				) : (
					<>
						<Text
							p={"10px 20px"}
						>{`Found ${productList.length} products for "${searchString}"`}</Text>
						<List>
							{productList.map((item, index) => {
								return (
									<>
										<ListItem
											p={"10px 20px"}
											_hover={{
												cursor: "pointer",
												backgroundColor: "gray.100",
											}}
											transition={"all 0.3s ease"}
											key={`${item.title}`}
											onMouseDown={() => {
												setShow(false);
												router.push(
													slugify(item.title)
												);
												dispatch(putRouteProduct(item));
											}}
										>
											<Box
												display={"flex"}
												alignItems={"center"}
											>
												<Image
													src={item.image}
													height={"35px"}
													w={"35px"}
													alt={item.title}
												/>
												<Box
													ml={"1rem"}
													justify={"left"}
												>
													<Text
														fontWeight={"semibold"}
													>
														{item.title.length > 50
															? `${item.title.slice(
																	0,
																	50
															  )}...`
															: item.title}
													</Text>
													<Text>{`${item.category}`}</Text>
												</Box>
											</Box>
										</ListItem>
										{index < productList.length - 1 ? (
											<Divider key={`${item.id}`} />
										) : null}
									</>
								);
							})}
						</List>
					</>
				)}
			</Box>
		</Box>
	);
};

export default SearchBar;
