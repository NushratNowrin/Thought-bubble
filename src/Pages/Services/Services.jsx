import { services } from "../../Contents";
import PriceLists from "./PriceLists/PriceLists";
import Service from "./Service/Service";
import "./Services.css";
const Services = () => {
	return (
		<div>
			{/* Services body */}
			<div className='h-[100px] bg-neutral-800 '></div>
			<div className='bg-[#f2dab8] z-10 p-5 xs:px-20 sm:p-10 md:p-20 pt-10'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-14 '>
					{services.map((service) => (
						<Service key={service.id} {...service}></Service>
					))}
				</div>
			</div>

			{/* Price List */}
			<div className='bg-white py-10'>
				<PriceLists></PriceLists>
			</div>
		</div>
	);
};

export default Services;
