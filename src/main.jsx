import React from "react";
import ReactDOM from "react-dom/client";
// From React-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import css file
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

// Basic routing
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/services",
				element: <Services></Services>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
