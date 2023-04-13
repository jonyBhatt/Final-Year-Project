import {
	Box,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	Select,
	Stack,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const EventRegister = () => {
	const [user, setUser] = useState({
		fullname: "",
		department: "",
		id: "",
		session: "",
		email: "",
	});
	const navigate = useNavigate()
	const handleChange = (e) => {
		setUser((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:8090/event/register", { ...user })
				.then((res) => {navigate("/")});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Box padding={"3.5"}>
			<Heading
				fontSize={"3xl"}
				fontWeight={"bold"}
				fontFamily={"Playfair Display"}>
				Event Registration
			</Heading>
			<Stack direction={["column", "row"]} justifyContent={"space-between"}>
				<form
					action=""
					method="post"
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-between",
						width: "70%",
						alignItems: "center",
					}}>
					<FormControl>
						<FormLabel>Full Name</FormLabel>

						<Input
							type="text"
							placeholder="John Doe"
							name="fullname"
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Department</FormLabel>
						<Select
							placeholder="Select Department"
							name="department"
							onChange={handleChange}>
							<option>CSE</option>
							<option>English</option>
							<option>BBA</option>
							<option>LLB</option>
						</Select>
					</FormControl>
					<FormControl>
						<FormLabel>Id</FormLabel>

						<Input
							type="number"
							placeholder="19010302007"
							onChange={handleChange}
							name="id"
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Session</FormLabel>
						<Input
							type="text"
							placeholder="spring19"
							name="session"
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							placeholder="john@gmail.com"
							onChange={handleChange}
							name="email"
						/>
					</FormControl>
					<button type="submit" className="primary__button">
						Register
					</button>
				</form>
				<Image
					src={
						"https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmclMjBldmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
					}
					objectFit={"cover"}
					borderRadius={"md"}
				/>
			</Stack>
		</Box>
	);
};

export default EventRegister;
