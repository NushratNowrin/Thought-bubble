import { NavLink } from "react-router-dom";
import "./ActiveLink.css";
const ActiveLink = ({ to, children }) => {
	return (
		<div>
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? "text-white active-link" : "text-[#FFFFFF99]"
				}>
				{children}
				{/* other code */}
			</NavLink>
		</div>
	);
};

export default ActiveLink;
