import { useState } from "react";

const Service = (service) => {
	const { title, img, hover_img, color } = service;
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};
	const image_bg = {
		backgroundColor: color,
		border: ` ${isHovered ? "3px solid yellow" : `1px solid ${color}`}`,
		padding: "20px",
		backgroundImage: `url(${isHovered ? hover_img : img})`,
		backgroundSize: "cover",
		backgroundPosition: "center right",
		position: "relative",
		transition: "background-image 0.5s ease-in-out,border 0.5s ease-in-out", // Smooth transition on hover
	};
	return (
		<div>
			<div
				style={image_bg}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className='h-72 rounded-xl'>
				<h3 className='text-white'>{title}</h3>
			</div>
		</div>
	);
};

export default Service;
