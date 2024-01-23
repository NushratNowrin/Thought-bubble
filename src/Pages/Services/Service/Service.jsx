import { useEffect, useState } from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Loader from "../../../Utilities/Loader/Loader";

const Service = (service) => {
	const { id, title, img, hover_img, color, description } = service;
	const [isHovered, setIsHovered] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [loading, setLoading] = useState(true);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleMobileClick = () => {
		setToggle(!toggle);
	};

	const image_bg = {
		backgroundColor: color,
		border: ` ${isHovered ? "2px solid white" : `1px solid ${color}`}`,
		padding: "20px",
		backgroundImage: `url(${img})`,
		backgroundSize: "cover",
		backgroundPosition: "center right",
		position: "relative",
		transition: "background-image 0.5s ease-in-out,border 0.2s ease-in-out", // Smooth transition on hover
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	};
	const hover_bg = {
		backgroundImage: `url(${hover_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center right",
		transition: "top 0.5s ease-in-out,border 0.2s ease-in-out", // Smooth transition on hover
	};
	const empty_bg = {
		backgroundColor: "rgba(255, 255, 255, 0)",
	};
	const button_bg = {
		backgroundColor: color,
	};
	useEffect(() => {
		// Cleanup function to remove the event listener
		const handleResize = () => {
			if (window.innerWidth > 640) {
				setToggle(false);
			}
		};

		window.addEventListener("resize", handleResize);
		setLoading(false);
		// Cleanup function
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array to run the effect only once

	const handleClick = () => {
		if (window.innerWidth <= 640) {
			handleMobileClick();
			// Find the DOM element for the clicked service panel
			const servicePanel = document.getElementById(`service-${id}`);

			// Check if the element exists before scrolling
			if (servicePanel) {
				servicePanel.scrollIntoView({
					behavior: "smooth",
					block: "center", // Scroll to the top of the element's layout box
					inline: "center", // Scroll to the left of the element's layout box
				});
			}
		}
	};

	// Function to limit the description to a certain number of words
	const limitWords = (text, limit) => {
		const words = text.split(" ");
		return words.slice(0, limit).join(" ");
	};
	console.log(toggle);
	// Slice the description to 20 words
	const slicedDescription = limitWords(description, 20);
	return (
		<div className='hover:z-20'>
			{loading ? (
				<Loader />
			) : (
				<div
					id={`service-${id}`}
					style={image_bg}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={handleClick}
					className='h-72 rounded-xl service-card relative'>
					<div
						style={hover_bg}
						className='hover-img rounded-xl absolute left-0 right-0 bottom-0 hidden sm:block'></div>
					<div
						style={toggle ? hover_bg : empty_bg}
						className='mobile-hover-img rounded-xl absolute left-0 right-0 bottom-0 top-0 block sm:hidden'
						onClick={() => {
							setToggle(!toggle);
						}}></div>
					<h3 className='text-white tracking-wider font-bold absolute text-lg bottom-5 left-5'>
						{title}
					</h3>
					<div
						className={`content rounded-b-xl 
						${window.innerWidth <= 640 ? (toggle ? "" : "hidden") : ""}
						`}>
						<p className='text-center text-[15px]'>{slicedDescription}...</p>
						<div className='flex justify-center'>
							<Link to={`/services/${id}`} className='cursor-pointer'>
								<button
									style={button_bg}
									onClick={() => {
										window.scrollTo(0, 0);
									}}
									className='px-4 py-[4px] rounded-lg text-white text-[15px] font-medium my-2 details-btn'>
									Details
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Service;
