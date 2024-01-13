// Hero.jsx
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import "./Hero.css";
import { services } from "../../../Contents";
import { Link } from "react-router-dom";

const Hero = () => {
	// Function to limit the number of words in a string
	const limitWords = (text, limit) => {
		const words = text.split(" ");
		return words.slice(0, limit).join(" ");
	};
	return (
		<div id='hero' className=' relative '>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={5000}>
				{services.map((service) => (
					<div key={service.id} data-src={service.details_img}>
						{/* Background Overlay */}
						<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 z-10'></div>

						<div className='text-white z-50 relative flex flex-col items-center justify-center text-center'>
							<h2 className='font-semibold text-3xl tracking-wide mb-5'>
								{service.title}
							</h2>
							{/* Use limitWords to show only 20 words of service.description */}
							<p className='mx-40'>{limitWords(service.description, 30)}...</p>
							<Link to={`/services/${service.id}`} className='cursor-pointer'>
								<button
									onClick={() => {
										window.scrollTo(0, 0);
									}}
									className={`bg-gradient-to-b from-[#DDB602] to-[#F39807] px-6 py-2 rounded-3xl text-white font-medium my-2 details-btn mt-5`}>
									Details
								</button>
							</Link>
						</div>
					</div>
				))}
			</AutoplaySlider>
		</div>
	);
};

export default Hero;
