import React, { useEffect, useState } from "react";
import { Box, Img, Stack, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPage = () => {
	const [blog, setBlog] = useState();
	let { id } = useParams();
	const fetchBlog = async () => {
		try {
			await axios.get(`http://localhost:8090/blog/${id}`).then((res) => {
				setBlog(res.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchBlog();
	}, [fetchBlog]);

	return (
		<Box>
			{blog ? (
				<>
					<Box
						padding={"30px"}
						bg={"gray.500"}
						display={"flex"}
						flexDirection={"column"}
						gap={"10px"}>
						<Text
							fontSize={"3xl"}
							fontWeight={"bold"}
							fontFamily={"Playfair Display"}
							color={"#fff"}>
							{blog.title}
						</Text>
						<Box
							display={"flex"}
							flexDirection={"row"}
							justifyContent={"space-between"}>
							<Box display={"flex"} flexDirection={"row"}>
								<Text>{blog.month}</Text>
								<Text>{blog.date}</Text>
							</Box>
							<Text
								fontWeight={"bold"}
								fontFamily={"Playfair Display"}
								color={"#fff"}>
								{blog.username}
							</Text>
						</Box>
					</Box>

					<Stack
						direction={["column", "row"]}
						align={"center"}
						justifyContent={"space-between"}>
						<Text textAlign={"start"} padding={"2"}>
							{blog.desc}
						</Text>
						<Img
							src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							boxSize={"200px"}
							objectFit={"cover"}
							width={"100%"}
						/>
					</Stack>
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</Box>
	);
};

export default BlogPage;
