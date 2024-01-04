import { useState } from "react";
import logo from "../../assets/thought_bubble_logo.gif";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav>
			<div className='w-full  py-[10px] fixed top-0 z-50'>
				<div className='flex justify-evenly items-center mx-16 px-4'>
					<Link
						to='/'
						className='flex items-center mr-[6px]'
						onClick={() => {
							window.scrollTo(0, 0);
						}}>
						<img src={logo} alt='Logo' className='max-h-[80px]' />
					</Link>

					<ul className=' list-none hidden sm:flex flex-row m-0 p-0'>
						<li
							className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive
										? "text-white active-link px-1"
										: "text-[#FFFFFF99] px-1 navmenu"
								}>
								<span>Home</span>
							</NavLink>
						</li>
						<li
							className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}>
							<ActiveLink to='/about'>
								<span className='navmenu px-1'>About</span>
							</ActiveLink>
						</li>
						<li
							className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}>
							<ActiveLink to='/services'>
								<span className='navmenu px-1'>Services</span>
							</ActiveLink>
						</li>
						<li
							className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}>
							<ActiveLink to='/contact'>
								<span className='navmenu px-1'>Contact</span>
							</ActiveLink>
						</li>
					</ul>

					{/* for mobile menu */}
					<div className='sm:hidden flex flex-1 justify-end items-center'>
						<div
							className='transition-all ease-in-out duration-300'
							onClick={() => setToggle(!toggle)}>
							{toggle ? (
								<RxCross2 className='w-[26px] h-[26px] text-white object-contain cursor-pointer' />
							) : (
								<LuMenu className='w-[26px] h-[26px] text-white object-contain cursor-pointer' />
							)}
						</div>
						<div
							className={`${
								!toggle ? "hidden" : "flex"
							} p-6 bg-black bg-opacity-90 absolute top-0 right-0 left-0 my-20 w-full z-10 transition-all ease-in-out duration-1000`}>
							<ul className='list-none flex flex-col justify-end items-start gap-4'>
								<li
									className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}
									onClick={() => {
										setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
									}}>
									<ActiveLink to='/' className=' px-1'>
										Home
									</ActiveLink>
								</li>
								<li
									className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}
									onClick={() => {
										setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
									}}>
									<ActiveLink to='/about' className=' px-1'>
										About
									</ActiveLink>
								</li>
								<li
									className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}
									onClick={() => {
										setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
									}}>
									<ActiveLink to='/services' className=' px-1'>
										Services
									</ActiveLink>
								</li>
								<li
									className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase`}
									onClick={() => {
										setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
									}}>
									<ActiveLink to='/contact' className=' px-1'>
										Contact
									</ActiveLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
