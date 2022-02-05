import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const reviewSchema = new mongoose.Schema(
	{
		productId: {
			type: Number,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		user: {
			type: ObjectId,
			ref: "user",
		},
	},
	{ timestamps: true }
);

export default mongoose.models.review || mongoose.model("review", reviewSchema);
