import { NextApiRequest, NextApiResponse } from "next";
import Review from "../../../schema/Review";
import User from "../../../schema/User";
import intiDb from "../../../utils/db";
import type { UserType } from "../../../types/user/userType";
intiDb();
export default async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case "GET":
			await getComments(req, res);
			break;
		case "POST":
			await postComment(req, res);
			break;
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
	const incomingUser: UserType = req.body.user;
	// creating user
	const user = new User({
		name: {
			firstName: incomingUser.name.firstName,
			lastName: incomingUser.name.lastName,
		},
		imageUrl: incomingUser.imageUrl,
	});
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
