import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, FormLabel, Heading, Input, Text } from "@chakra-ui/react";

const Login = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:8090/auth/login", {
				name,
				password,
			});
			localStorage.setItem("currentuser", JSON.stringify(res.data));
			navigate("/");
		} catch (err) {
			setError(err.response.data);
			console.log(err);
		}
	};

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			justifyContent={"center"}
			gap={"10px"}>
			<form onSubmit={handleSubmit}>
				<Heading fontSize={"4xl"} fontWeight={"black"}>
					Sign In
				</Heading>
				<FormLabel htmlFor="name">name</FormLabel>
				<Input
					name="name"
					type="text"
					placeholder="johndoe"
					onChange={(e) => setName(e.target.value)}
				/>

				<FormLabel htmlFor="">Password</FormLabel>
				<Input
					name="password"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" className="primary__button">
					Login
				</button>
				<Text fontSize={"sm"} fontWeight={"light"} color="#555">
					No account!!!{" "}
					<Link
						to="/register"
						style={{ fontWeight: "bold", color: "lightblue" }}>
						Register
					</Link>
				</Text>
			</form>
		</Box>
	);
};

export default Login;
