import Post from "../../models/BlogModel/post.js";

export const blogPost = async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savePost = await newPost.save();
		res.status(201).json(savePost);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const blogUpdate = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		// const updatePost = await post.update(req.body);
		if (post.username === req.body.name) {
			try {
				const updatePost = await Post.findByIdAndUpdate(req.params.id, {
					$set: req.body,
				});
				res.status(201).json(updatePost);
			} catch (error) {
				res.status(500).json(error);
			}
		} else {
			res.status(500).json("Something Wrong..");
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getBlog = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const getAllBlog = async (req, res) => {
	try {
		const post = await Post.find({});
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json(error);
	}
};
