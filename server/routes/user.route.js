import express from "express";
import {
	deleteUser,
	getUser,
	updateProfile,
} from "../controllers/UserController/user.controller.js";
const router = express.Router();
router.put("/:id", updateProfile);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
export { router as userRouter };
