import { Link } from "react-router-dom";
import "./Banner.css";
import { useState } from "react";

const Banner = ({ heading, bannerBg, breadcrumbs }) => {
	return (
		<div className=' '>
			{/* background Overlay */}
			<div className='relative w-[100%] min-h-[100px]'>
				{/* <img src={bannerBg} alt='' className='w-0 xs:w-[100%]' /> */}
				<img src={bannerBg} alt='' className={`w-0 xs:w-[100%] `} />
				<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 z-10'>
					{/* Breadcrumbs */}
					<div className='breadcrumbs sm:z-20 flex flex-col items-center gap-0'>
						<h3 className='text-white text-xl md:text-3xl lg:text-[40px]'>
							{heading}
						</h3>
						<br />
						<p className='text-white font-[500] -my-5 tracking-wide text-sm md:text-base'>
							{breadcrumbs.map((item, index) => (
								<li key={index} className='inline'>
									<Link to={item.url} className='no-underline hover:underline'>
										{item.title}
									</Link>
									<span> / </span>
								</li>
							))}
							<span className='text-amber-400'>{heading}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
