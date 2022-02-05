import { StarIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { FiStar } from "react-icons/fi";
import type { RatingProps } from "../../types";

const Rating = ({ numReviews, rating, price }: RatingProps) => {
	const arr = useMemo(() => [1, 2, 3, 4, 5], []);

	return (
		<Box display={"flex"} justifyContent={"space-between"}>
			<Box>
				{arr.map((item, index) => {
					return (
						<StarIcon
							key={`${index}`}
							color={"orange.300"}
							scale={1.2}
							fillOpacity={
								Math.round(rating) <= index ? "0%" : "100%"
							}
							stroke={"orange.300"}
							mr={1}
							display={"inline"}
						/>
					);
				})}
				<Text
					color={"orange.500"}
					mt={"1"}
				>{`${rating} (${numReviews})`}</Text>
			</Box>
			{price ? (
				<Text as={"h3"} fontSize={"1rem"} fontWeight={"semibold"}>
					{`$${price}`}
				</Text>
			) : null}
		</Box>
	);
};

export default Rating;
