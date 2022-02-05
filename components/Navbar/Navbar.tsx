import NavbarContainer from "./NavbarContainer";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchHandler } from "../../utils/searchHandler";
import { RootState } from "../../redux/store";
import { ProductType } from "../../types";

const Navbar = () => {
	// state for query
	const [searchQuery, setSearchQuery] = useState("");

	// state for list of products to display in serch products
	const [showProducts, setShowProducts] = useState<ProductType[] | []>([]);

	// state for flag - if search query has results or not
	const [notFound, setNotFound] = useState(false);

	// state if input is focussed - TODO

	const handleQueryChange = (
		e: React.ChangeEvent<HTMLInputElement>
	): void => {
		setSearchQuery(e.target.value);
	};

	const initialProdutList: ProductType[] | [] = useSelector(
		(state: RootState) => state.products
	);

	useEffect(() => {
		const res: ProductType[] | [] = searchHandler(
			searchQuery,
			initialProdutList
		);
		if (res.length > 0) {
			setShowProducts(res);
		}
		if (searchQuery !== "") {
			setNotFound(false);
		}
		if (searchQuery != "" && res.length === 0) {
			setShowProducts([]);
			setNotFound(true);
		}
	}, [searchQuery]);

	return (
		<NavbarContainer>
			<Logo />
			<SearchBar
				handleQueryChange={handleQueryChange}
				productList={showProducts}
				searchString={searchQuery}
				notFound={notFound}
			/>
		</NavbarContainer>
	);
};

export default Navbar;
