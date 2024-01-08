import { SwiperSlide } from "swiper/react";

const SingleHero = ({ color, details_img }) => {
	const hero_bg = {
		backgroundColor: color,
		padding: "20px",
		backgroundImage: `url(${details_img})`,
		backgroundSize: "cover",
		backgroundPosition: "center center",
		height: "100%",
		position: "relative",
	};
	return (
		<SwiperSlide style={hero_bg} className='h-[100vh'>
			{/* background Overlay */}
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 z-10'></div>
		</SwiperSlide>
	);
};

export default SingleHero;
