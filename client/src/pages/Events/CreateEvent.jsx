import React, { useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateEvent = () => {
	const [event, setEvent] = useState({
		title: "",
		desc: "",
		tags: [],
		month: "",
		date: "",
		place: "",
	});
	const handleChange = (e) => {
		setEvent((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post("http://localhost:8090/event/createevent", { ...event })
				.then((res) => console.log(res.data));
		} catch (error) {
			console.log(error);
		}
		// console.log(event);
		navigate("/");
	};
	return (
		<Box padding={"3.5"}>
			<Heading
				fontSize={"3xl"}
				fontWeight={"bold"}
				fontFamily={"Playfair Display"}
				borderBottom={"1px solid orange"}>
				Create Your Event
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
						<FormLabel>Title</FormLabel>

						<Input
							type="text"
							placeholder="Event 1"
							name="title"
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Description</FormLabel>
						<Input
							type="text"
							placeholder="Description"
							name="desc"
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Tags</FormLabel>

						<Input
							type="text"
							placeholder="web, graphics, etc.."
							onChange={handleChange}
							name="tags"
						/>
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
					<button type="submit" className="primary__button">
						Create Event
					</button>
				</form>
				<Image
					src={
						"https://media.istockphoto.com/id/1460841124/photo/young-female-teacher-teaching-a-programing-class.jpg?b=1&s=170667a&w=0&k=20&c=bh1-ozc0kpHvXHEAcj01pePHP7MCBmas_97hJAAgaWI="
					}
					objectFit={"cover"}
					borderRadius={"md"}
				/>
			</Stack>
		</Box>
	);
};

export default CreateEvent;
