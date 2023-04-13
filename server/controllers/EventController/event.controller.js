import CreateEvent from "../../models/EventModel/createEvent.js";
import Event from "../../models/EventModel/event.js";

export const register = async (req, res) => {
	try {
		const newUser = new Event(req.body);
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json(error);

		console.log(error);
	}
};

export const createEvent = async (req, res) => {
	const newEvent = new CreateEvent(req.body);
	try {
		await newEvent.save();
		res.status(201).json(newEvent);
	} catch (error) {
		res.status(500).json(error);

		console.log(error);
	}
};

export const getAllEvent = async (req, res) => {
	try {
		const events = await CreateEvent.find({});
		res.status(200).json(events);
	} catch (error) {
		res.status(500).json(error);
		console.log(error);
	}
};
