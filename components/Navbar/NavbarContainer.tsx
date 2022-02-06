import { Box, Container, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect } from "react";
import { NavbarContainerProps } from "../../types";

const NavbarContainer = ({ children }: NavbarContainerProps) => {
	const isMobile = useMediaQuery("(max-width: 768px)");
	return (
		<Container maxW={"container.lg"} p={0}>
			<Flex
				w="100%"
				as="nav"
				// direction={{ sm: "column", lg: "row" }}
				align="center"
				justify="space-between"
				wrap={"wrap"}
				mb={4}
				p={8}
			>
				{children}
			</Flex>
		</Container>
	);
};

export default NavbarContainer;
