import "./Services.css";
import { services } from "../../Contents";
import Service from "./Service/Service";
const Services = () => {
	return (
		<div>
			<div className='services-hero relative'>
				{/* background Overlay */}
				<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60 z-10'></div>
				{/* Breadcrumbs */}
				<div className='breadcrumbs relative z-20 flex flex-col items-center gap-0 pt-[22vh]'>
					<h3 className='text-white text-[56px] leading-none'>Services</h3>
					<br />
					<p className='text-white font-[500] -my-5 tracking-wide'>
						<a href='/' className='no-underline hover:underline'>
							Home
						</a>{" "}
						/ <span className='text-amber-400'>Services</span>
					</p>
				</div>
			</div>
			{/* Services body */}
			<div className='bg-[#f7f0e6] p-10'>
				<div className='grid grid-cols-4 justify-between items-center gap-5'>
					{services.map((service) => (
						<Service key={service.id} {...service}></Service>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
