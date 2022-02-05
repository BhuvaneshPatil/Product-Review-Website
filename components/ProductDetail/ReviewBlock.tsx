import { Box, ListItem, Text } from "@chakra-ui/react";
import UserBlock from "./UserBlock";
import moment from "moment";
const ReviewBlock = ({ review }) => {
	return (
		<ListItem p={"1rem 0"}>
			<UserBlock user={review.user} />
			<Text color={"gray.500"}>
				Reviewed on{" "}
				{moment(review.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
			</Text>
			<Text>{review.content}</Text>
		</ListItem>
	);
};

export default ReviewBlock;
