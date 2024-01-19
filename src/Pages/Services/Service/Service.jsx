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

	const button_bg = {
		backgroundColor: color,
	};
	useEffect(() => {
		// Cleanup function to remove the event listener
		const handleResize = () => {
			if (window.innerWidth > 600) {
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

	// const contentStyle = {
	// 	bottom: toggle ? "-188px" : "0",
	// };
	const handleClick = () => {
		if (window.innerWidth <= 600) {
			handleMobileClick();
		}
	};
	// Function to limit the description to a certain number of words
	const limitWords = (text, limit) => {
		const words = text.split(" ");
		return words.slice(0, limit).join(" ");
	};

	// Slice the description to 20 words
	const slicedDescription = limitWords(description, 20);
	return (
		<div className='hover:z-20'>
			{loading ? (
				<Loader />
			) : (
				<div
					style={image_bg}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onClick={handleClick}
					className='h-72 rounded-xl service-card relative'>
					<div
						style={hover_bg}
						className='hover-img rounded-xl absolute left-0 right-0 bottom-0 '></div>
					<h3 className='text-slate-700 tracking-wider font-bold text-lg'>
						{title}
					</h3>
					<div
						className={`content rounded-b-xl ${
							window.innerWidth <= 600
								? toggle
									? "bottom-[-188px]"
									: "bottom-0"
								: ""
						}`}>
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
