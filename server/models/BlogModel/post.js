import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
	{
		title: String,
		desc: String,
		photo: {
			type: String,
			require: false,
		},
		username: String,
		categories: {
			type: Array,
			require: false,
		},
		month: String,
		date: String,
	},
	{
		timestamps: true,
	},
);

const Post = mongoose.model("post", PostSchema);
export default Post;
