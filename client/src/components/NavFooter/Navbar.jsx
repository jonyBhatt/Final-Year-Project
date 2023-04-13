import React, { useEffect, useState } from "react";
import {
	Box,
	Button,
	Container,
	Stack,
	Text,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	SkeletonCircle,
	SkeletonText,
} from "@chakra-ui/react";
import "./Nav.css";
import { Link } from "react-router-dom";
import getCurrentUser from "../utils/getCurrentUser.js";

const Navbar = () => {
	const currentUser = JSON.parse(localStorage.getItem("currentuser"));
	const [active, setActive] = useState(false);
	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		window.addEventListener("scroll", isActive);
		return () => {
			window.removeEventListener("scroll", isActive);
		};
	}, []);

	return (
		<nav
			style={{
				backgroundColor: "#14998a",
				position: "sticky",
				top: 0,
				zIndex: 999,
				transition: ".5s all ease",
			}}>
			<Box>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: "15px",
					}}>
					<Text
						fontWeight={"700"}
						fontSize={"3xl"}
						fontFamily={"Playfair Display"}
						color={"white"}>
						AlumniNEUB
					</Text>
					<Stack direction={"row"} spacing={"24px"} align={"center"}>
						<Text
							fontWeight={"600"}
							fontSize={"1xl"}
							fontFamily={"Merriweather"}
							color={"white"}>
							Alumni Directory
						</Text>

						{currentUser ? (
							<Box>
								<Text onClick={onOpen} className="user__name">
									{currentUser.other?.name}
								</Text>
								<Drawer
									isOpen={isOpen}
									placement="right"
									// initialFocusRef={firstField}
									onClose={onClose}>
									<DrawerOverlay />
									<DrawerContent>
										<DrawerCloseButton />
										<DrawerHeader borderBottomWidth="1px">
											Welcome To Alumni <br /> {currentUser.other?.name}
										</DrawerHeader>
										<DrawerBody>
											<Text
												borderBottomWidth="1px"
												marginBottom={"4"}
												paddingY={"2"}>
												Profile
											</Text>
											<Text
												borderBottomWidth="1px"
												marginBottom={"4"}
												paddingY={"2"}>
												Job Field
											</Text>
											{currentUser.other?.isAlumni && (
												<>
													<Text
														borderBottomWidth="1px"
														marginBottom={"4"}
														paddingY={"2"}>
														<Link to="/createevent">Create Event</Link>
													</Text>

													<Text
														borderBottomWidth="1px"
														marginBottom={"4"}
														paddingY={"2"}>
														<Link to="/createjob">Create Job</Link>
													</Text>
													<Text
														borderBottomWidth="1px"
														marginBottom={"4"}
														paddingY={"2"}>
														<Link to="/createblog">Create Blog</Link>
													</Text>
												</>
											)}
										</DrawerBody>
										<DrawerFooter borderTopWidth="1px">
											<Button colorScheme="blue">Log Out</Button>
										</DrawerFooter>
									</DrawerContent>
								</Drawer>
							</Box>
						) : (
							<button className="primary__button">
								<Link to="/login">Login</Link>
							</button>
						)}
					</Stack>
				</div>
				{active && (
					<Box>
						<Stack
							flexDirection={"row"}
							justifyContent={"space-between"}
							alignItems={"center"}
							px={"20px"}
							py={"10px"}
							bg={"white"}>
							<Text className="menu__link">Communities</Text>
							<Text className="menu__link">Events</Text>
							<Text className="menu__link">Job</Text>
							<Text className="menu__link">Volunteer</Text>
							<Text className="menu__link">Learn</Text>
							<Text className="menu__link">About</Text>
							<Text className="menu__link">Contact</Text>
						</Stack>
						<hr />
					</Box>
				)}
			</Box>
		</nav>
	);
};

export default Navbar;
