import { NextApiRequest, NextApiResponse } from "next";
import Review from "../../../schema/Review";
import User from "../../../schema/User";
import intiDb from "../../../utils/db";
intiDb();
const fun = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			await getComments(req, res);
		case "POST":
			await postComment(req, res);
		default:
			break;
	}
};

const getComments = async (req: NextApiRequest, res: NextApiResponse) => {
	const { pid } = req.query;
	const reviews = await Review.find({ productId: pid }).populate("user");
	res.json(reviews);
	res.end();
};

const postComment = async (req: NextApiRequest, res: NextApiResponse) => {
	const { pid } = req.query;
	// creating user
	const user = new User(req.body.user);
	await user.save();
	// creating review
	const review = new Review({
		productId: pid,
		content: req.body.review.content,
		user: user._id,
	});
	await review.save();
	const retValue = await review.populate("user");
	res.json(retValue);
	res.end();
};
export default fun;
