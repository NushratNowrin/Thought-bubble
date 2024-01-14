import { services } from "../../../Contents";
import Heading from "../../../Utilities/Heading/Heading";
import PriceList from "./PriceList/PriceList";
import "./PriceLists.css";

const PriceLists = () => {
	return (
		<div>
			<Heading heading={"Price List"}></Heading>
			<div className='xs:mx-3 sm:mx-10 lg:mx-20 my-10'>
				{/* getting started */}
				{/* <div className='bg-slate-600 my-10 p-5 rounded-lg text-center'>
					<h2 className='text-white font-semibold text-xl mb-2'>
						Getting Started
					</h2>
					<div className='font-medium'>
						<div className='grid grid-cols-3 justify-between items-center gap-1 m-2 my-1 bg-amber-500 text-white'>
							<div></div>
							<div className='col-span-2  font-semibold'>
								<div className='grid grid-cols-3 items-center'>
									<div>In Person</div>
									<div>Online</div>
									<div>Reductions</div>
								</div>
							</div>
						</div>

						<div>
							<div className='grid grid-cols-3 justify-between items-center  m-2 my-1 bg-amber-100'>
								<div className=' text-black bg-amber-200'>
									Initial Consultation
								</div>
								<div className='col-span-2'>
									<div className='grid grid-cols-3 items-center uppercase'>
										<p>Free</p>
										<p>Free</p>
										<p>Free</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				{services.map((service, index) => (
					<PriceList
						key={index}
						title={service.title}
						pricelist={service.priceList}></PriceList>
				))}
			</div>
		</div>
	);
};

export default PriceLists;
