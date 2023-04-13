import mongoose from "mongoose";

const { Schema } = mongoose;

const EventSchema = new Schema({
	fullname: String,
	department: String,
	id: String,
	session: String,
	email: String,
});

const Event = mongoose.model("event", EventSchema);
export default Event;
