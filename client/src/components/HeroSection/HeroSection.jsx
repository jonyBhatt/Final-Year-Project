import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./hero.css";

const HeroSection = () => {
	return (
		<div className="heroSection">
			<Box
				padding={"100px"}
				display={"flex"}
				flexDirection={"column"}
				gap={"2rem"}>
				<Text
					fontSize={"7xl"}
					color="#fff"
					textAlign={"center"}
					fontFamily={"Playfair Display"}
					fontWeight={"black"}>
					2023 NEUB <br /> Board Elections <br /> Now Open
				</Text>
				<Text className="p__text" textAlign={"center"} color={"#ddd"}>
					Elections for NEUB's Board of Overseers and elected directors <br />{" "}
					of the NEUB Alumni Association have opened. NEUB degree <br /> holders
					are invited to vote online or by paper ballot by May 16.
				</Text>
				<Stack
					direction={["column", "row"]}
					spacing={"24px"}
					align={"center"}
					justifyContent={"center"}>
					<button className="primary__button">Learn More</button>
					<button className="secondary__button">Meet the candidates</button>
				</Stack>
			</Box>
		</div>
	);
};

export default HeroSection;
