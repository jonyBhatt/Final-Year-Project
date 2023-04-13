import React from "react";
import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Box, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
// import newRequest from "./../../../utils/NewRequest";
// import upload from "../../../utils/UploadFile";
const Register = () => {
	const [file, setFile] = useState(null);
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		img: "",
		isAlumni: false,
		isAdmin: false,
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setUser((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:8090/auth/register", {
					...user,
				})
				.then((res) => console.log(res.data));
			navigate("/login");
		} catch (err) {
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
					Create Account
				</Heading>
				<FormLabel htmlFor="">Username</FormLabel>
				<Input
					name="name"
					type="text"
					placeholder="johndoe"
					onChange={handleChange}
				/>
				<FormLabel htmlFor="">Email</FormLabel>
				<Input
					name="email"
					type="email"
					placeholder="email"
					onChange={handleChange}
				/>
				<FormLabel htmlFor="">Password</FormLabel>
				<Input name="password" type="password" onChange={handleChange} />
				<FormLabel htmlFor="">Profile Picture</FormLabel>
				<Input type="file" onChange={(e) => setFile(e.target.files[0])} />

				<button type="submit" className="primary__button">
					Register
				</button>
			</form>
		</Box>
	);
};

export default Register;


