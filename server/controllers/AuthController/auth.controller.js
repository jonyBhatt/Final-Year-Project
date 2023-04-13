import User from "./../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashPass = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			name: req.body.name,
			email: req.body.email,
			password: hashPass,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
		console.log(error);
	}
};

export const login = async (req, res) => {
	try {
		const user = await User.findOne({ name: req.body.name });
		!user && res.status(400).json("Wrong Credential..");

		const validate = bcrypt.compare(req.body.password, user.password);
		!validate && res.status(400).json("Wrong Credential..");

		const token = jwt.sign(
			{
				id: user._id.toString(),
				isAdmin: user.isAdmin,
				isAlumni: user.isAlumni,
			},
			process.env.JWT_KEY,
			{ expiresIn: "1d" },
		);
		// localStorage.setItem("AccessToken", token);

		const { password, ...other } = user._doc;
		res.status(200).json({ other, token });
	} catch (error) {
		res.status(500).json(error);
		console.log(error);
	}
};
