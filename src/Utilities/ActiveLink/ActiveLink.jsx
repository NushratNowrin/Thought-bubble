import { NavLink } from "react-router-dom";

const ActiveLink = ({to, children}) => {
	return (
		<div>
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? "text-white" : "text-[#FFFFFF99]"
				}>
				{children}
				{/* other code */}
			</NavLink>
		</div>
	);
};

export default ActiveLink;
