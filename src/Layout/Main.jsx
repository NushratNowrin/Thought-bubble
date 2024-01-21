import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Utilities/Navbar/Navbar";
import Footer from "../Utilities/Footer/Footer";
import Loader from "../Utilities/Loader/Loader";

const Main = () => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);
	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<div>
					<Navbar />
					<Outlet className='w-full' />
					<Footer className='w-full' />
				</div>
			)}
		</div>
	);
};

export default Main;
