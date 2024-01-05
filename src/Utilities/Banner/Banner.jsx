import "./Banner.css";

const Banner = ({ heading, bannerBg, breadcrumbs, breadcrumbsUrl }) => {
	const BannerBackground = {
		backgroundImage: `url(${bannerBg})`,
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		minHeight: "49vh",
		backgroundSize: "cover",
	};
	return (
		<div className=' relative' style={BannerBackground}>
			{/* background Overlay */}
			<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 z-10'></div>
			{/* Breadcrumbs */}
			<div className='breadcrumbs relative z-20 flex flex-col items-center gap-0 pt-[22vh]'>
				<h3 className='text-white text-[56px] leading-none'>{heading}</h3>
				<br />
				<p className='text-white font-[500] -my-5 tracking-wide'>
					<a href={breadcrumbsUrl} className='no-underline hover:underline'>
						{breadcrumbs}
					</a>{" "}
					/ <span className='text-amber-400'>{heading}</span>
				</p>
			</div>
		</div>
	);
};

export default Banner;