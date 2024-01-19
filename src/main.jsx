import React from "react";
import ReactDOM from "react-dom/client";
// From React-router-dom
import { createHashRouter, RouterProvider } from "react-router-dom";
// import css file
import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Services from "./Pages/Services/Services";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";
import { services } from "./Contents";
import Error from "./Pages/Error/Error";

// Basic routing
const router = createHashRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/services",
				element: <Services></Services>,
			},
			{
				path: "/contacts",
				element: <Contact></Contact>,
			},
			{
				path: "/services/:id",
				element: <ServiceDetails></ServiceDetails>,
				loader: ({ params }) => {
					const selectedService = services.find(
						(item) => String(item.id) === params.id
					);

					// Returning the selected item (or any data you want to pass to the component)
					return selectedService;
				},
			},
		],
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<Main />
		</RouterProvider>
	</React.StrictMode>
);
