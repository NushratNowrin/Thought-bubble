import { services } from "../../../Contents";
import Heading from "../../../Utilities/Heading/Heading";
import PriceList from "./PriceList/PriceList";
import "./PriceLists.css";

const PriceLists = () => {
	return (
		<div>
			<Heading heading={"Price List"}></Heading>
			<div className='mx-20 my-10'>
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
