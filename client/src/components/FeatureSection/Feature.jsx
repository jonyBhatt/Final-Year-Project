import { Box, Heading, Image, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import VP from "/assets/raghav-modi-P1vXpgpL208-unsplash.jpg";
const Feature = () => {
	return (
		<Box paddingX={"50px"} paddingY={"20px"}>
			<Stack
				direction={["column", "row"]}
				spacing={["30", "56"]}
				align={"center"}
				justify={"space-between"}>
				<Box>
					<Heading fontFamily={"Playfair Display"} paddingY={"10"}>
						Meet Harvard’s 30th President
					</Heading>
					<Text fontSize={"sm"} fontFamily={"Merriweather"} color={"#222222"}>
						Claudine Gay PhD ’98, Edgerley Family Dean of Harvard's Faculty of
						Arts and Sciences and a distinguished scholar of democracy and
						political participation, will become the first woman of color to
						lead the University.
					</Text>
				</Box>
				<Image src={VP} objectFit={"cover"} boxSize={"500px"} />
			</Stack>
		</Box>
	);
};

export default Feature;
