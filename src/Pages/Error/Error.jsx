import { Link } from "react-router-dom";
import errorImage from "../../assets/error.gif";
import "./Error.css";
const Error = () => {
	return (
		<div className='text-center flex flex-col justify-center items-center h-[100vh] bg-white p-5'>
			<div>
				<img src={errorImage} alt='' className='h-[30vh]' />
			</div>
			<h2 className='gradient-text text-3xl xs:text-5xl font-bold'>Ooppss</h2>
			<p className='text-lg mt-4'>
				Sorry, the page you are looking for does not exist.
			</p>
			<button className='bg-amber-300 font-semibold px-3 py-1 rounded mt-2 hover:scale-105 transition-all duration-200 ease-in-out'>
				<Link to='/'>Back to Home</Link>
			</button>
		</div>
	);
};

export default Error;
