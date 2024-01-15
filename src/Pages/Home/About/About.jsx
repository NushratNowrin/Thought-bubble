import { aboutContent } from "../../../Contents";
import Image from "../../../assets/about/Haran-Rasalingam-01.jpg";
import "./About.css";
const About = () => {
	const ListingPara = aboutContent.aboutListingContent;
	return (
		<div className='overflow-hidden mb-5 ' id='about'>
			<div className='section-bg px-5 xs:px-10 md:px-20 lg:px-32 pt-20'>
				<div className='about-container grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10'>
					<div className='sm:col-span-2 md:col-span-1 lg:col-span-2'>
						<h3 className='about-heading text-[#52565e] text-xl md:text-2xl lg:text-4xl lg:leading-[3rem] font-semibold  relative mb-8'>
							{aboutContent.aboutHeading}
						</h3>
						<ul className='list-inside list-disc ml-5 py-5 text-[#4a4d4a]'>
							{ListingPara.map((elem, index) => (
								<li key={index}>{elem}</li>
							))}
						</ul>

						<p className='text-[#4a4d4a] text-sm'>{aboutContent.aboutPara}</p>
					</div>
					<div className='mx-auto'>
						<img
							src={Image}
							alt='Haran Rasalingam'
							className='sm:w-[1100px] rounded-lg image'
						/>
					</div>
				</div>
			</div>
			<div className='curve-down'></div>
		</div>
	);
};

export default About;
