import React from "react";
import "./App.css";
import {
	BlogPage,
	CreateBlog,
	CreateEvent,
	EventRegister,
	Home,
} from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
// import Profile from "./components/AuthComponents/Profile";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/singleblog/:id",
					element: <BlogPage />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/register",
					element: <Register />,
				},
				{
					path: "/createblog",
					element: <CreateBlog />,
				},
				{
					path: "/eventregistration",
					element: <EventRegister />,
				},
				{
					path: "/createevent",
					element: <CreateEvent />,
				},
			],
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
