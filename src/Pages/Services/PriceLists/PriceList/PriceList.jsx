import { GoCheckCircle } from "react-icons/go";
const PriceList = ({ title, pricelist }) => {
	const { packs, chooseForm } = pricelist;

	return (
		<div className='bg-slate-600 text-sm xxs:text-base my-10 py-2 sm:p-5 rounded-lg text-center'>
			<h2 className='text-white font-semibold text-xl mb-2'>{title}</h2>
			<div className='font-medium'>
				<div className='grid xs:grid-cols-3 justify-between items-center gap-1 xs:m-2 my-1 bg-amber-500 text-white'>
					<div></div>
					<div className='col-span-2  font-semibold'>
						<div className='grid grid-cols-3 items-center'>
							<div>In Person</div>
							<div>Online</div>
							<div>Reductions</div>
						</div>
					</div>
				</div>
				{packs.map((singlePack, index) => (
					<div key={index}>
						<div className='xs:grid grid-cols-3 justify-between items-center  xs:m-2 my-1 bg-amber-100'>
							<div className=' text-black bg-amber-200 p-2 xs:p-0'>
								{singlePack.pack[0]}
							</div>
							<div className='col-span-2'>
								<div className='grid grid-cols-3 items-center'>
									{singlePack.pack[1].map((elem, innerIndex) => (
										<div key={innerIndex} className=' text-black mx-1'>
											{elem}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
				<div className='xs:grid grid-cols-3 justify-between items-center gap-1 xs:m-2 bg-amber-200 p-2 xs:p-0'>
					<div className=' text-black '>
						<div className=' text-black'>{chooseForm[0]}</div>
					</div>
					<div className='col-span-2'>
						<div className='bg-amber-100 py-2'>
							{chooseForm[1]?.map((element, index) => (
								<div
									key={index}
									className=' text-black text-left mx-2 sm:mx-5 lg:mx-20 flex items-center gap-2'>
									<GoCheckCircle className='text-[#feb900] text-xl' />
									{element}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceList;
