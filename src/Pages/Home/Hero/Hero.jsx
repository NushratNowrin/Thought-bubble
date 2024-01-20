// Hero.jsx
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import "./Hero.css";
import { Link } from "react-router-dom";
import { heroContents } from "../../../Contents";

const Hero = () => {
	// Function to limit the number of words in a string
	const limitWords = (text, limit) => {
		const words = text.split(" ");
		return words.slice(0, limit).join(" ");
	};
	const viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	const scrollPosition = (viewportHeight * 80) / 100;
	return (
		<div id='hero' className=' relative '>
			<AutoplaySlider
				play={true}
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={5000}>
				{heroContents.map((heroContent) => (
					<div key={heroContent.id} data-src={heroContent.heroImg}>
						{/* Background Overlay */}
						<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70 z-10'></div>

						<div className='text-white z-50 relative flex flex-col items-center justify-center text-center mx-0 sm:mx-40'>
							<h2 className='font-semibold text-3xl tracking-wide mb-5'>
								{heroContent.heading}
							</h2>
							{/* Use limitWords to show only 20 words of service.description */}
							<p className=''>{limitWords(heroContent.content, 30)}...</p>
							<Link to={`${heroContent?.link}`} className='cursor-pointer'>
								<button
									onClick={() => {
										if (heroContent?.link === "/#about") {
											window.scrollTo(0, scrollPosition);
										} else {
											window.scrollTo(0, 0);
										}
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
