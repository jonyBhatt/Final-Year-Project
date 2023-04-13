import mongoose from "mongoose";

const { Schema } = mongoose;

const CategorySchema = new Schema({
	cat_title: String,
});

const Category = mongoose.model("category", CategorySchema);
export default Category;
