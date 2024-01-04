import "./About.css";
const About = () => {
	return (
		<div>
			<div className='about-hero relative'>
				{/* background Overlay */}
				<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 z-10'></div>
				{/* Breadcrumbs */}
				<div className='breadcrumbs relative z-20 flex flex-col items-center gap-0 pt-[22vh]'>
					<h3 className='text-white text-[56px] leading-none'>About</h3>
					<br />
					<p className='text-white font-[500] -my-5 tracking-wide'>
						<a href='/' className='no-underline hover:underline'>
							Home
						</a>{" "}
						/ <span className='text-amber-400'>About</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
