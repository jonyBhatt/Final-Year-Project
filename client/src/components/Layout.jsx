import React from "react";
import Navbar from "./NavFooter/Navbar";
import Footer from "./NavFooter/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Layout;
