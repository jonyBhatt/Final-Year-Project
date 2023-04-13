import mongoose from "mongoose";

const { Schema } = mongoose;

const createEventSchema = new Schema(
	{
		title: String,
		desc: String,
		tags: {
			type: Array,
			require: false,
		},
		month: String,
		date: String,
		place: String,
	},
	{
		timestamps: true,
	},
);

const CreateEvent = mongoose.model("createEvent", createEventSchema);
export default CreateEvent;
