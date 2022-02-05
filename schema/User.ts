import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			firstName: {
				type: String,
				required: true,
			},
			lastName: {
				type: String,
				required: true,
			},
		},
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default mongoose.models.user || mongoose.model("user", userSchema);
