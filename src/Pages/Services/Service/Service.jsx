import { useState } from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = (service) => {
	const { id, title, img, hover_img, color, description } = service;
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	const image_bg = {
		backgroundColor: color,
		border: ` ${isHovered ? "2px solid white" : `1px solid ${color}`}`,
		padding: "20px",
		backgroundImage: `url(${isHovered ? hover_img : img})`,
		backgroundSize: "cover",
		backgroundPosition: "center right",
		position: "relative",
		transition: "background-image 0.5s ease-in-out,border 0.2s ease-in-out", // Smooth transition on hover
		boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
	};

	const button_bg = {
		backgroundColor: color,
	};
	// Function to limit the description to a certain number of words
	const limitWords = (text, limit) => {
		const words = text.split(" ");
		return words.slice(0, limit).join(" ");
	};

	// Slice the description to 20 words
	const slicedDescription = limitWords(description, 20);
	return (
		<div className='z-20'>
			<div
				style={image_bg}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className='h-72 rounded-xl service-card hover:mb-44 transition-all duration-500'>
				<h3 className='text-white'>{title}</h3>
				<div className='content rounded-b-xl '>
					<p className='text-center text-[15px]'>{slicedDescription}...</p>
					<div className='flex justify-center'>
						<Link to={`/services/${id}`} className='cursor-pointer'>
							<button
								style={button_bg}
								className='px-4 py-[8px] rounded-lg text-white text-[15px] font-medium my-2 details-btn'>
								Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
