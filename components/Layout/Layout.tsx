import { Box } from "@chakra-ui/react";
import { LayoutPropsTypes } from "../../types";
import Navbar from "../Navbar/Navbar";

const Layout = (props: LayoutPropsTypes) => {
	return (
		<Box pb={"5rem"}>
			<Navbar />
			{props.children}
		</Box>
	);
};

export default Layout;
