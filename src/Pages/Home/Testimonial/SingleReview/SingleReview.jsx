import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// react rating
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import "./SingleReview.css";
import { SwiperSlide } from "swiper/react";
const SingleReview = ({ name, designation, image, star, review }) => {
	const customStyles = {
		itemShapes: RoundedStar,
		activeFillColor: "#ffc107",
		inactiveFillColor: "#A1A1A1",
	};
	return (
		<SwiperSlide className='bg-white relative rounded-lg testimonial-card'>
			<div className='p-10 pt-16 text-center '>
				<div className='text-[18px] font-[700] mb-2 text-black testimonial-heading'>
					{name}
				</div>
				<div className='text-[#999999] text-sm font-medium testimonial-designation'>
					{designation}
				</div>
				<div className='mt-2 mb-4 flex items-center justify-center'>
					<Rating
						style={{ maxWidth: 100 }}
						value={star}
						readOnly
						itemStyles={customStyles}
					/>
				</div>
				<div className='text-[#4a4d4a] italic inline'>
					<FaQuoteLeft className='inline text-[#ffd565] mr-3 -translate-y-1/3' />
					<span>{review}</span>
					<FaQuoteRight className='inline text-[#ffd565] ml-3 translate-y-1/3' />
				</div>
			</div>
			<div className='absolute bg-white p-5 w-28 h-28 -top-16 left-[50%] -translate-x-1/2 rounded-xl testimonial-img'>
				<img src={image} alt='' />
			</div>
		</SwiperSlide>
	);
};

export default SingleReview;
