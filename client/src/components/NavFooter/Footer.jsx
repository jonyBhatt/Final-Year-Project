import React from "react";
import {
	Box,
	HStack,
	StackDivider,
	Text,
	VStack,
	Icon,
} from "@chakra-ui/react";
import {
	AiFillFacebook,
	AiFillLinkedin,
	AiFillYoutube,
	AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
	return (
		<footer>
			<Box p={"50px"} bg={"#464646"}>
				<HStack spacing={"100px"} justifyContent={"center"}>
					<Box>
						<VStack align={"flex-start"}>
							<Text
								fontWeight={"700"}
								fontSize={"1xl"}
								fontFamily={"Playfair Display"}
								color={"white"}>
								Social Media
							</Text>
							<HStack divider={<StackDivider borderColor="gray.200" />}>
								<Icon as={AiOutlineTwitter} color="#CCCCCC" />
								<Text color={"#CCCCCC"}>Twitter</Text>
							</HStack>
							<HStack divider={<StackDivider borderColor="gray.200" />}>
								<Icon as={AiFillYoutube} color="#CCCCCC" />
								<Text color={"#CCCCCC"}>Youtube</Text>
							</HStack>
							<HStack divider={<StackDivider borderColor="gray.200" />}>
								<Icon as={AiFillFacebook} color="#CCCCCC" />
								<Text color={"#CCCCCC"}>Facebook</Text>
							</HStack>
							<HStack divider={<StackDivider borderColor="gray.200" />}>
								<Icon as={AiFillLinkedin} color="#CCCCCC" />
								<Text color={"#CCCCCC"}>Linkedin</Text>
							</HStack>
						</VStack>
					</Box>
					<Box>
						<VStack align={"flex-start"}>
							<Text
								fontWeight={"700"}
								fontSize={"1xl"}
								fontFamily={"Playfair Display"}
								color={"white"}>
								Get Help
							</Text>
							<VStack divider={<StackDivider borderColor="gray" />}>
								<Text color={"#CCCCCC"}>CONTACT THE ALUMNI SERVICE DESK</Text>
								<Text color={"#CCCCCC"}>CONTACT THE ALUMNI SERVICE DESK</Text>
								<Text color={"#CCCCCC"}>CONTACT THE ALUMNI SERVICE DESK</Text>
								<Text color={"#CCCCCC"}>CONTACT THE ALUMNI SERVICE DESK</Text>
							</VStack>
						</VStack>
					</Box>
					<Box>
						<VStack align={"flex-start"}>
							<Text
								fontWeight={"700"}
								fontSize={"1xl"}
								fontFamily={"Playfair Display"}
								color={"white"}>
								About this site
							</Text>
							<VStack
								divider={<StackDivider borderColor="gray.200" />}
								align={"flex-start"}>
								<Text color={"#CCCCCC"}>ACCESSIBILITY</Text>
								<Text color={"#CCCCCC"}>PRIVACY</Text>
								<Text color={"#CCCCCC"}>TERMS OF USE</Text>
								<Text color={"#CCCCCC"}>FEEDBACK</Text>
							</VStack>
						</VStack>
					</Box>
				</HStack>
			</Box>
		</footer>
	);
};

export default Footer;
