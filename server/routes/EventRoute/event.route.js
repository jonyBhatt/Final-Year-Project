import express from "express";
import {
	createEvent,
	getAllEvent,
	register,
} from "../../controllers/EventController/event.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/createevent", createEvent);
router.get("/", getAllEvent);

export { router as eventRouter };
