import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
	const jobData = useLoaderData();
	console.log(jobData);
	return <div>ServiceDetails</div>;
};

export default ServiceDetails;
