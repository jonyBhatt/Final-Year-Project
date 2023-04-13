import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { Blog } from "./../../data/BlogData";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogCard = () => {
	const [blog, setBlog] = useState();
	const fetchBlog = async () => {
		try {
			await axios.get("http://localhost:8090/blog/").then((res) => {
				setBlog(res.data);
				// console.log(res.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchBlog();
	}, [fetchBlog]);

	return (
		<Box padding={"3"}>
			<Heading
				fontFamily={"Merriweather"}
				fontWeight={"black"}
				paddingBottom={"2.5"}>
				Stories
			</Heading>
			<Stack
				direction={["column", "row"]}
				align={"center"}
				justifyContent={"space-between"}>
				{blog &&
					blog.map((blogs) => (
						<Box key={blogs.id}>
							<Card maxW="sm">
								<CardBody>
									<Image
										src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
										borderRadius="md"
									/>
									<Stack mt="6" spacing="3">
										<Heading size="md">{blogs.title}</Heading>
										<Text>{blogs.desc}</Text>
										<Box display={"flex"} flexDirection={"row"} gap={"2"}>
											<Text>{blogs.month}</Text>
											<Text>{blogs.date}</Text>
										</Box>
									</Stack>
								</CardBody>
								<Divider />
								<CardFooter>
									<button className="primary__button">
										<Link to={`/singleblog/${blogs._id}`}>Read More</Link>
									</button>
								</CardFooter>
							</Card>
						</Box>
					))}
			</Stack>
		</Box>
	);
};

export default BlogCard;
