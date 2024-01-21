import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Banner from "../../../Utilities/Banner/Banner";
import { GoCheckCircle } from "react-icons/go";
import "./ServiceDetails.css";
import Loader from "../../../Utilities/Loader/Loader";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();
	// const navigate = useNavigate();

	useEffect(() => {
		// Simulating content loading delay
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 500);

		// Cleanup function
		return () => clearTimeout(timeoutId);
	}, [id]);
	const serviceData = useLoaderData();
	const {
		title,
		banner_img,
		details_img,
		description,
		priceList,
		heading,
		para1,
		para2,
	} = serviceData;
	const { packs, chooseForm } = priceList;
	useEffect(() => {
		// Reset loading state when navigating to a new route
		setLoading(true);
	}, [id]);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
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
					<div className='p-2 xs:p-10 sm:p-20'>
						<div className='lg:grid grid-cols-2 gap-4 justify-center'>
							{/* side content */}
							<div className=''>
								<h4 className='text-[#252625] text-xl font-[700] service-details-title'>
									{title}
								</h4>
								<p className='text-[#4a4d4a] text-[15px] mt-2 mb-5'>
									{description}
								</p>
								{/* Price list */}
								<div className='text-center text-sm xxs:text-base'>
									<div className='font-medium'>
										<div className='xs:grid grid-cols-3 justify-between items-center gap-1 p-2 bg-amber-300 text-white'>
											<div></div>
											<div className='col-span-2 font-semibold'>
												<div className='grid grid-cols-3 items-center'>
													<div>In Person</div>
													<div>Online</div>
													<div>Reductions</div>
												</div>
											</div>
										</div>
										{packs.map((singlePack, index) => (
											<div key={index}>
												<div className='xs:grid grid-cols-3 justify-between items-center bg-amber-100 my-[1px]'>
													<div className=' text-black bg-amber-200'>
														{singlePack.pack[0]}
													</div>
													<div className='col-span-2'>
														<div className='grid grid-cols-3 items-center'>
															{singlePack.pack[1].map((elem, innerIndex) => (
																<div
																	key={innerIndex}
																	className=' text-black mx-1'>
																	{elem}
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										))}
										<div className='xs:grid grid-cols-3 justify-between items-center gap-1 my-2 bg-amber-200'>
											<div className=' text-black '>
												<div className=' text-black'>{chooseForm[0]}</div>
											</div>
											<div className='col-span-2'>
												<div className='bg-amber-100 py-2'>
													{chooseForm[1]?.map((element, index) => (
														<div
															key={index}
															className=' text-black text-left mx-2 flex items-center gap-2'>
															<GoCheckCircle className='text-[#feb900] text-xl' />
															{element}
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* img */}
							<div>
								<img className='h-[100%]' src={details_img} alt='' />
							</div>
							<div className=''></div>
						</div>
						{/* Para */}
						<div className=''>
							<h2 className='pt-5 pb-1 text-[28px] text-[#4a4d4a] font-[700] service-details-heading'>
								{heading}
							</h2>
							<p className='text-[#4a4d4a] text-[15px] mt-2'>{para1}</p>
							<div className='my-5'></div>
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
			)}
		</>
	);
};

export default ServiceDetails;
