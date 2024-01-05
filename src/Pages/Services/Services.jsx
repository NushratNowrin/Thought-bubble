import servicesBg from "../../assets/services/services.jpg";
import { services } from "../../Contents";
import Banner from "../../Utilities/Banner/Banner";
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
				<div className='grid grid-cols-4 justify-between items-center gap-8'>
					{services.map((service) => (
						<Service key={service.id} {...service}></Service>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
