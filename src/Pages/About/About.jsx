import "./About.css";
const About = () => {
	return (
		<div>
			<div className='about-hero relative'>
				{/* background Overlay */}
				<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 z-10'></div>
				{/* Breadcrumbs */}
				<div className='relative z-20 flex flex-col items-center gap-0 pt-[20vh]'>
					<h3 className='text-white text-6xl leading-none'>Contact</h3>
					<br />
					<p className='text-white font-medium -my-5'>
						Home / <span className='text-amber-400'>Contact</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
