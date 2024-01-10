import { useLoaderData } from "react-router-dom";
import Banner from "../../../Utilities/Banner/Banner";
import { GoCheckCircle } from "react-icons/go";
import "./ServiceDetails.css";

const ServiceDetails = () => {
	const serviceData = useLoaderData();
	const { title, banner_img, details_img, description, heading, para1, para2 } =
		serviceData;
	console.log(serviceData);
	return (
		<div>
			{/* Services Banner */}
			<div>
				<Banner
					bannerBg={banner_img}
					heading={title}
					breadcrumbs={[
						{
							title: "Home",
							url: "/",
						},
						{
							title: "Services",
							url: "/services",
						},
					]}></Banner>
			</div>

			{/* Service Details */}
			<div className='p-20'>
				<div className='grid grid-cols-2 gap-4 justify-center'>
					{/* side content */}
					<div className="">
						<h4 className='text-[#252625] text-xl font-[700] service-details-title'>
							{title}
						</h4>
						<p className='text-[#4a4d4a] text-[15px] mt-2 mb-5'>
							{description}
						</p>
						{/* {feature.map((item, index) => (
							<li
								key={index}
								className='text-[#4a4d4a] text-base list-inside list-none py-1 flex items-center gap-2'>
								<GoCheckCircle className='text-[#feb900] text-xl' /> {item}
							</li>
						))} */}
					</div>
					{/* main content */}
					<div className=''>
						<div>
							<img className='w-[100%]' src={details_img} alt='' />
						</div>
						<div>
							<h2 className='pt-5 pb-1 text-[28px] text-[#4a4d4a] font-[700] service-details-heading'>
								{heading}
							</h2>
							<p className='text-[#4a4d4a] text-[15px] mt-2'>{para1}</p>
							<div className='my-5'>
								{/* {fees_list.map((item, index) => (
									<li
										key={index}
										className='text-[#4a4d4a] text-base list-inside list-none py-1 flex items-center gap-2'>
										<GoCheckCircle className='text-[#feb900] text-xl' /> In
										person: £{item}
									</li>
								))} */}
							</div>
							{para2.map((item, index) => (
								<p
									key={index}
									className='text-[#4a4d4a] text-[15px] mt-2 mb-5 '>
									{item}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;
