import axios from "axios";

export const getReviewsForProduct = (id: string) => {
	const data = axios
		.get(`${window.location.origin}/api/reviews/${id}`)
		.then((res) => {
			return res.data;
		});
	return data;
};
