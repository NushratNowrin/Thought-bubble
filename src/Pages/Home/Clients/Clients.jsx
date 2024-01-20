import { clients } from "../../../Contents";
import Heading from "../../../Utilities/Heading/Heading";
import "./Clients.css";

const Clients = () => {
	return (
		<div className='bg-white py-20 text-center'>
			<Heading heading={"Clients"} subHeading={clients.para}></Heading>
			<div className='flex flex-col item-center gap-10 sm:gap-0 my-10 px-5 xs:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-60'>
				<div className='flex flex-col sm:flex-row justify-between gap-5 sm:gap-16 md:gap-20 lg:gap-32 md:h-32 xl:h-56 2xl:h-60 mx-auto xxs:mx-16 xs:mx-28 sm:mx-0 md:mx-20'>
					<div>
						<img src={clients.mind_img} alt='' />
					</div>
					<div className='sm:flex items-end'>
						<img src={clients.knowledge_hut_img} alt='' />
					</div>
					<div>
						<img src={clients.guardian_img} alt='' />
					</div>
				</div>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-32 mx-auto xxs:mx-16 xs:mx-28 sm:mx-20  md:mx-32 lg:mx-48 xl:mx-60 '>
					<div>
						<img src={clients.deutsche_img} alt='' />
					</div>
					<div>
						<img src={clients.efinancialcareers_img} alt='' />
					</div>
				</div>
				<div className='grid sm:grid-cols-3 items-end justify-between gap-16 md:gap-20 lg:gap-32  mx-auto xxs:mx-16 xs:mx-28 sm:mx-0 md:mx-10 lg:mx-20 '>
					<div className='mx-auto'>
						<img src={clients.bbc_img} alt='' />
					</div>
					<div>
						<img src={clients.morgan_img} alt='' />
					</div>
					<div>
						<img src={clients.trainline_img} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
