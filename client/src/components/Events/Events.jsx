import {
	Box,
	HStack,
	Heading,
	Stack,
	Tag,
	Text,
	VStack,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	ButtonGroup,
	Button,
	SkeletonCircle,
	SkeletonText,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { EventData } from "../../data/EventsData";
import { Link } from "react-router-dom";
import axios from "axios";

const Events = () => {
	const [events, setEvents] = useState();
	const fectchEvent = async () => {
		try {
			await axios.get("http://localhost:8090/event/").then((res) => {
				setEvents(res.data);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fectchEvent();
	}, [fectchEvent]);

	return (
		<Box bg={"gray.300"} padding={"3.5"}>
			<Heading fontWeight={"black"} fontFamily={"Playfair Display"}>
				Programs & Events
			</Heading>
			{events ? (
				<>
					{events.map((event) => (
						<Stack
							direction={["column", "row"]}
							align={"center"}
							justifyContent={"space-between"}
							marginY={"4"}
							border={"1px solid #00727a "}
							padding={"4"}
							borderRadius={"2xl"}
							flexWrap={"wrap"}
							key={event._id}>
							<HStack spacing={"4"}>
								<VStack spacing={"-4"}>
									<Text
										fontWeight={"400"}
										fontSize={"sm"}
										fontFamily={"Merriweather"}>
										{event.month}
									</Text>{" "}
									<br />
									<Text
										fontWeight={"bold"}
										fontSize={"lg"}
										fontFamily={"Playfair Display"}>
										{event.date}
									</Text>
								</VStack>
								<VStack spacing={"3.5"} alignItems={"flex-start"}>
									<Tag size={"sm"} variant={"solid"} bg={"#14998a"}>
										{event.tags}
									</Tag>
									<Popover>
										<PopoverTrigger>
											<Text
												fontWeight={"600"}
												fontSize={"lg"}
												fontFamily={"Merriweather"}
												cursor={"pointer"}>
												{event.title}
											</Text>
										</PopoverTrigger>
										<PopoverContent
											color="white"
											bg="blue.800"
											borderColor="blue.800">
											{/* <Text fontWeight={"bold"} fontSize={"lg"} fontFamily={"Playfair Display"}></Text> */}
											<PopoverHeader pt={4} fontWeight="bold" border="0">
												Welcome to {event.title} Event
											</PopoverHeader>
											<PopoverArrow />
											<PopoverCloseButton />
											<PopoverBody>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore.
											</PopoverBody>
											<PopoverFooter
												border="0"
												display="flex"
												alignItems="center"
												justifyContent="flex-end"
												pb={4}>
												<ButtonGroup size="sm">
													<Button colorScheme="green">
														<Link to="/eventregistration">Registration</Link>
													</Button>
													<Button colorScheme="red">Cancel</Button>
												</ButtonGroup>
											</PopoverFooter>
										</PopoverContent>
									</Popover>

									<Text
										fontWeight={"400"}
										fontSize={"sm"}
										fontFamily={"Merriweather"}>
										{event.place}
									</Text>
								</VStack>
							</HStack>
						</Stack>
					))}
				</>
			) : (
				<Box padding="6" boxShadow="lg" bg="white">
					<SkeletonCircle size="10" />
					<SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
				</Box>
			)}
		</Box>
	);
};

export default Events;

// {
// 	EventData.map((ev) => (
// 		<Stack
// 			direction={["column", "row"]}
// 			align={"center"}
// 			justifyContent={"space-between"}
// 			marginY={"4"}
// 			border={"1px solid #00727a "}
// 			padding={"4"}
// 			borderRadius={"2xl"}
// 			flexWrap={"wrap"}>
// 			<HStack spacing={"4"}>
// 				<VStack spacing={"-4"}>
// 					<Text fontWeight={"400"} fontSize={"sm"} fontFamily={"Merriweather"}>
// 						{ev.month}
// 					</Text>{" "}
// 					<br />
// 					<Text
// 						fontWeight={"bold"}
// 						fontSize={"lg"}
// 						fontFamily={"Playfair Display"}>
// 						{ev.date}
// 					</Text>
// 				</VStack>
// 				<VStack spacing={"3.5"} alignItems={"flex-start"}>
// 					<Tag size={"sm"} variant={"solid"} bg={"#14998a"}>
// 						{ev.badge}
// 					</Tag>
// 					<Popover>
// 						<PopoverTrigger>
// 							<Text
// 								fontWeight={"600"}
// 								fontSize={"lg"}
// 								fontFamily={"Merriweather"}
// 								cursor={"pointer"}>
// 								{ev.title}
// 							</Text>
// 						</PopoverTrigger>
// 						<PopoverContent color="white" bg="blue.800" borderColor="blue.800">
// 							{/* <Text fontWeight={"bold"} fontSize={"lg"} fontFamily={"Playfair Display"}></Text> */}
// 							<PopoverHeader pt={4} fontWeight="bold" border="0">
// 								Welcome to Event
// 							</PopoverHeader>
// 							<PopoverArrow />
// 							<PopoverCloseButton />
// 							<PopoverBody>
// 								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
// 								eiusmod tempor incididunt ut labore et dolore.
// 							</PopoverBody>
// 							<PopoverFooter
// 								border="0"
// 								display="flex"
// 								alignItems="center"
// 								justifyContent="flex-end"
// 								pb={4}>
// 								<ButtonGroup size="sm">
// 									<Button colorScheme="green">
// 										<Link to="/eventregistration">Registration</Link>
// 									</Button>
// 									<Button colorScheme="red">Cancel</Button>
// 								</ButtonGroup>
// 							</PopoverFooter>
// 						</PopoverContent>
// 					</Popover>

// 					<Text fontWeight={"400"} fontSize={"sm"} fontFamily={"Merriweather"}>
// 						{ev.place}
// 					</Text>
// 				</VStack>
// 			</HStack>
// 		</Stack>
// 	));
// }
