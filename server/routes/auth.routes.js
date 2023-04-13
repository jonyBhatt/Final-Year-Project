import express from "express";
const router = express.Router();

import {
	login,
	register,
} from "../controllers/AuthController/auth.controller.js";

router.post("/register", register);
router.post("/login", login);
export { router as authRouter };
