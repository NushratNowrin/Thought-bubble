import { Outlet } from "react-router-dom";
import Navbar from "../Utilities/Navbar/Navbar";
import Footer from "../Utilities/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;
