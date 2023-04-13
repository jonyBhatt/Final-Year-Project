import React from "react";
import { Box, Heading, Input } from "@chakra-ui/react";
import { useFormik } from "formik";

export default function Reset() {
	const fromik = useFormik({
		initialValues: {
			password: "",
			confrimpassword: "",
		},
		// validate: loginValidity,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values) => {
			console.log(values);
		},
	});
	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			gap={"24px"}
			alignItems={"center"}
			justifyContent={"flex-start"}>
			<Heading>Reset Password</Heading>
			<Box
				display={"flex"}
				flexDirection={"column"}
				gap={"10px"}
				alignItems={"center"}>
				<Input
					type="text"
					{...fromik.getFieldProps("password")}
					placeholder="Password"
					size={"md"}
				/>
				<Input
					type="text"
					{...fromik.getFieldProps("confirmpassword")}
					placeholder="Confirm Password"
					size={"md"}
				/>
			</Box>
			<button className="secondary__button">Reset</button>
		</Box>
	);
}
