import "./Heading.css";

const Heading = ({ heading, subHeading }) => {
	return (
		<div className='flex flex-col justify-center items-center '>
			<div className='relative'>
				<h2 className='section-heading text-[#2e3135] text-[32px] font-[700] '>
					{heading}
				</h2>
			</div>
			<p className='mx-5 md:mx-28 lg:mx-52 p-1 text-center text-[#4a4d4a]'>
				{subHeading}
			</p>
		</div>
	);
};

export default Heading;
