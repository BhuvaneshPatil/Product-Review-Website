import { Flex, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
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
};

export default LoadingSpinner;
