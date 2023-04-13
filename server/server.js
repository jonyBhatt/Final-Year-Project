import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.route.js";
import { blogRouter } from "./routes/BlogRoutes/blog.routes.js";
import cors from "cors";
import { eventRouter } from "./routes/EventRoute/event.route.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5050;

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to mongoDB!");
	} catch (error) {
		console.log(error);
	}
};

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/blog", blogRouter);
app.use("/event", eventRouter);

app.listen(port, () => {
	connect();
	console.log(`Your server running on ${port}`);
});
