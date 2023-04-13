import {
	Box,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	Select,
	Stack,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SideImage from "/assets/undraw_add_notes_re_ln36.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
	const [blog, setBlog] = useState({
		title: "",
		desc: "",
		username: "",
		categories: [],
		month: "",
		date: "",
	});
	const navigate = useNavigate();
	const handleChange = (e) => {
		setBlog((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:8090/blog/post", {
					...blog,
				})
				.then((res) => {
					navigate("/");
				});
		} catch (error) {}
	};
	return (
		<Box padding={"3.5"}>
			<Heading
				fontSize={"3xl"}
				fontWeight={"bold"}
				fontFamily={"Playfair Display"}>
				Create Your Blog
			</Heading>
			<Stack
				direction={["column", "row"]}
				align={"center"}
				justifyContent={"space-around"}>
				<Box width={"100%"} height={"auto"} margin={"20px"} padding={3}>
					<form action="" onSubmit={handleSubmit} style={{ width: "100%" }}>
						<FormControl>
							<FormLabel>Author Name</FormLabel>
							<Input type="text" name="username" onChange={handleChange} />
						</FormControl>
						<FormControl>
							<FormLabel>Title</FormLabel>
							<Input type="text" name="title" onChange={handleChange} />
						</FormControl>
						<FormControl>
							<FormLabel>Category</FormLabel>
							<Input type="text" name="categories" onChange={handleChange} />
						</FormControl>

						<FormControl>
							<FormLabel>Month</FormLabel>
							<Select
								placeholder="Select Month"
								name="month"
								onChange={handleChange}>
								<option>January</option>
								<option>February</option>
								<option>March</option>
								<option>April</option>
								<option>May</option>
								<option>June</option>
								<option>July</option>
								<option>August</option>
								<option>September</option>
								<option>October</option>
								<option>November</option>
								<option>December</option>
							</Select>
						</FormControl>
						<FormControl>
							<FormLabel>Date</FormLabel>
							<Input type="number" name="date" onChange={handleChange} />
						</FormControl>
						<FormControl>
							<FormLabel>Image</FormLabel>
							<Input type="file" />
						</FormControl>
						<FormControl>
							<FormLabel>Describe your Blog</FormLabel>
							<Textarea
								size={"md"}
								placeholder="Blog Description"
								onChange={handleChange}
								name="desc"
							/>
						</FormControl>
						<button type="submit" className="secondary__button">
							Create
						</button>
					</form>
				</Box>
				<Image src={SideImage} objectFit={"cover"} boxSize={"1xl"} />
			</Stack>
		</Box>
	);
};

export default CreateBlog;
