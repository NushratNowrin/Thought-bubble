import { testimonials } from "../../../Contents";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from "swiper/modules";
import "./Testimonial.css";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// react rating
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Heading from "../../../Utilities/Heading/Heading";

const Testimonial = () => {
	const customStyles = {
		itemShapes: RoundedStar,
		activeFillColor: "#ffc107",
		inactiveFillColor: "#A1A1A1",
	};
	return (
		<div className='bg-[#f7f0e6] py-14'>
			<Heading
				heading='Testimonials'
				subHeading='Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
						nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti'></Heading>

			{/* Testimonial body */}
			<div className='py-10 mx-10 relative'>
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"2"}
					spaceBetween={"20"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 200,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					className='mySwiper'
					autoplay={{
						delay: 3000,
						disableOnInteraction: true,
					}}
					navigation={true}
					modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide
							key={index}
							className='bg-white rounded-lg testimonial-card'>
							<div className='p-10 pt-16 text-center mx-10'>
								<div className='text-[18px] font-[700] mb-2 text-black testimonial-heading'>
									{testimonial.nickname}
								</div>
								<div className='text-[#999999] text-sm font-medium testimonial-designation'>
									{testimonial.designation}
								</div>
								<div className='mt-2 mb-4 flex items-center justify-center'>
									<Rating
										style={{ maxWidth: 100 }}
										value={testimonial.star}
										readOnly
										itemStyles={customStyles}
									/>
								</div>
								<div className='text-[#4a4d4a] italic inline'>
									<FaQuoteLeft className='inline text-[#ffd565] mr-3 -translate-y-1/3' />
									<span>{testimonial.review}</span>
									<FaQuoteRight className='inline text-[#ffd565] ml-3 translate-y-1/3' />
								</div>
							</div>
							<div className='absolute bg-white p-5 w-28 h-28 -top-16 left-[50%] -translate-x-1/2 rounded-xl testimonial-img z-20'>
								<img src={testimonial.image} alt='' />
							</div>
						</SwiperSlide>
					))}
					{/* </div> */}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonial;
