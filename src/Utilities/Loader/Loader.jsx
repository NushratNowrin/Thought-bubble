import "./Loader.css";

const Loader = ({ loading, children }) => {
	return (
		<div>
			{loading} ? (
			<div className='flex justify-center items-center h-screen bg-[#f3f3f3]'>
				<div className='loader'></div>
			</div>
			) : ( {children} );
		</div>
	);
};

export default Loader;
