import servicesBg from "../../assets/services/services.jpg";
import { services } from "../../Contents";
import Banner from "../../Utilities/Banner/Banner";
import PriceLists from "./PriceLists/PriceLists";
import Service from "./Service/Service";
import "./Services.css";
const Services = () => {
	return (
		<div>
			{/* Services Banner */}
			<div>
				<Banner
					bannerBg={servicesBg}
					heading={"Services"}
					breadcrumbs={[
						{
							title: "Home",
							url: "/",
						},
					]}></Banner>
			</div>
			{/* Services body */}
			<div className='bg-[#f2dab8] z-10 p-20 pb-60'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-14'>
					{services.map((service) => (
						<Service key={service.id} {...service}></Service>
					))}
				</div>
			</div>

			{/* Price List */}
			<div className='bg-neutral-100 py-20'>
				<PriceLists></PriceLists>
			</div>
		</div>
	);
};

export default Services;
