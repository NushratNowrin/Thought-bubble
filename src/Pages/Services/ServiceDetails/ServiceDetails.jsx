import { useLoaderData } from "react-router-dom";
import Banner from "../../../Utilities/Banner/Banner";

const ServiceDetails = () => {
	const serviceData = useLoaderData();
	const { banner_img, title } = serviceData;
	console.log(serviceData);
	return (
		<div>
			{/* Services Banner */}
			<div>
				<Banner
					bannerBg={banner_img}
					heading={title}
					breadcrumbs={"Home"}
					breadcrumbsUrl={"/"}></Banner>
			</div>
		</div>
	);
};

export default ServiceDetails;
