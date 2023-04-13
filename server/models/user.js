import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		name: String,
		email: String,
		password: String,
		profilePic: {
			type: String,
			require: false,
		},
		isAlumni: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

const User = mongoose.model("user", UserSchema);
export default User;
