import {
	Box,
	Button,
	Divider,
	Heading,
	List,
	ListItem,
	Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserType } from "../../types/user/userType";
import { getReviewsForProduct } from "../../utils/api/getReviews";
import ReviewBlock from "./ReviewBlock";
import UserBlock from "./UserBlock";

const ReviewSection = ({ product }) => {
	const user: UserType = useSelector((state: RootState) => state.user);
	const [reviewContent, setReviewContent] = useState("");
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		getReviewsForProduct(product.id).then((data) => setReviews(data));
	}, []);
	const handleSubmit = () => {
		axios
			.post(`${window.location.origin}/api/reviews/${product.id}`, {
				review: {
					content: reviewContent,
				},
				user: {
					name: {
						firstName: user.name.firstName,
						lastName: user.name.lastName,
					},
					imageUrl: user.imageUrl,
				},
			})
			.then((res) => {
				setReviewContent("");
				setReviews([...reviews, res.data]);
			});
	};
	return (
		<Box>
			{/* Input */}
			<Box
				bgColor={"gray.200"}
				borderRadius={"lg"}
				p={"1rem 2rem"}
				mt={"2rem"}
			>
				<UserBlock user={user} />
				<Textarea
					onChange={(e) => setReviewContent(e.target.value)}
					bgColor={"#FFF"}
					placeholder={"Your review is much appreciated"}
					value={reviewContent}
				></Textarea>
				<Button
					colorScheme={"green"}
					mt={"1rem"}
					onClick={handleSubmit}
					disabled={!reviewContent.length}
				>
					Submit
				</Button>
			</Box>
			{/* Display reviews */}
			{reviews.length > 0 ? (
				<List mt={"2rem"}>
					{reviews.map((item, index) => (
						<>
							<ReviewBlock review={item} key={item._id} />
							{index < reviews.length - 1 ? <Divider /> : null}
						</>
					))}
				</List>
			) : (
				<Heading
					color={"gray.500"}
					fontStyle={"italic"}
					textAlign="center"
				>
					There are no reviews for this product yet Do leave one.
				</Heading>
			)}
		</Box>
	);
};

export default ReviewSection;
