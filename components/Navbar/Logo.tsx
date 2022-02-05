import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Logo = () => {
	const router = useRouter();
	return (
		<Box cursor={"pointer"} onClick={() => router.push("/")}>
			<Text fontSize="2xl" as={"h1"} color={"#333"}>
				Di-Commerce
			</Text>
		</Box>
	);
};

export default Logo;
