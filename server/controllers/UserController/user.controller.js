import express from "express";
import User from "./../../models/user.js";
import bcrypt from "bcrypt";
import Post from "./../../models/BlogModel/post.js";

/**
 *
 * @param {*} req
 * @param {*} res
 */
export const updateProfile = async (req, res) => {
	if (req.body.userId === req.params.id)
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}

	try {
		const updateUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true },
		);
		res.status(200).json(updateUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const deleteUser = async (req, res) => {
	if (req.body.userId === req.params.id)
		try {
			const user = await User.findById(req.params.id);
			try {
				await Post.deleteMany({ name: user.name });
				await User.findByIdAndDelete(req.params.id);
				res.status(200);
			} catch (error) {
				res.status(500).json(error);
			}
		} catch (error) {
			res.status(500).json(error);
		}
};

export const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...info } = user._doc;
		res.status(200).json(info);
	} catch (error) {
		res.status(500).json(error);
	}
};
