import { useEffect, useState } from "react";
import logo from "../../assets/thought_bubble_logo.gif";
import { Link } from "react-router-dom";
import { services } from "../../Contents";
import "./Navbar.css";

import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [submebuToggle, setSubmebuToggle] = useState(false);
	const [active, setActive] = useState("Home");
	const [navBg, setNavbg] = useState(false);

	const changeBg = () => {
		if (window.scrollY >= 80) {
			setNavbg(true);
		} else {
			setNavbg(false);
		}
	};

	const viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	const scrollPosition = (viewportHeight * 80) / 100;

	useEffect(() => {
		window.addEventListener("scroll", changeBg);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener("scroll", changeBg);
		};
	}, []);
	return (
		<nav>
			<div
				className={`${
					navBg === true
						? "bg-black bg-opacity-70 transition-all duration-100 ease-linear"
						: "bg-transparent py-[10px] px-4"
				} w-full  fixed top-0 z-50`}>
				<div className='flex justify-evenly items-center mx-5 xs:mx-16'>
					<Link
						to='/'
						className='flex items-center mr-[6px]'
						onClick={() => {
							window.scrollTo(0, 0);
						}}>
						<img src={logo} alt='Logo' className='max-h-[80px]' />
					</Link>

					<ul className=' list-none hidden sm:flex flex-row m-0 p-0'>
						<Link
							to='/'
							onClick={() => {
								window.scrollTo(0, 0);
							}}>
							<li
								className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase ${
									active === "Home"
										? "text-white active-link px-1"
										: "text-[#FFFFFF99] px-1 navmenu"
								} hover:text-white font-medium cursor-pointer`}
								onClick={() => {
									setActive("Home");
								}}>
								<span>Home</span>
							</li>
						</Link>

						<Link
							to='/#about'
							onClick={() => {
								window.scrollTo(0, scrollPosition);
							}}>
							<li
								className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase ${
									active === "About"
										? "text-white active-link px-1"
										: "text-[#FFFFFF99] px-1 navmenu"
								} hover:text-white font-medium cursor-pointer`}
								onClick={() => {
									setActive("About");
								}}>
								<span>About</span>
							</li>
						</Link>

						<li
							className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase service-menu arrow ${
								active === "Services"
									? "text-white active-link px-1"
									: "text-[#FFFFFF99] px-1 navmenu"
							} hover:text-white font-medium cursor-pointer`}
							onClick={() => {
								setActive("Services");
							}}>
							<Link
								to='/services'
								onClick={() => {
									window.scrollTo(0, 0);
								}}>
								<span>
									Services{" "}
									<span>
										{" "}
										<IoIosArrowDown className='inline' />
									</span>
								</span>
							</Link>
							<ul className='submenu bg-[#ffffff] text-[#4a4d4a] capitalize text-sm'>
								{services.map((service) => (
									<Link
										key={service.id}
										to={`/services/${service.id}`}
										className='cursor-pointer'>
										<li>{service.title}</li>
									</Link>
								))}
							</ul>
						</li>

						<Link
							to='/contacts'
							onClick={() => {
								window.scrollTo(0, 0);
							}}>
							<li
								className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase ${
									active === "Contact"
										? "text-white active-link px-1"
										: "text-[#FFFFFF99] px-1 navmenu"
								} hover:text-white font-medium cursor-pointer`}
								onClick={() => {
									setActive("Contact");
								}}>
								<span>Contact</span>
							</li>
						</Link>
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
								<Link
									to='/'
									onClick={() => {
										window.scrollTo(0, 0);
									}}>
									<li
										className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase ${
											active === "Home"
												? "text-white active-link px-1"
												: "text-[#FFFFFF99] px-1 navmenu"
										} hover:text-white font-medium cursor-pointer`}
										onClick={() => {
											setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
											setActive("Home");
										}}>
										<span>Home</span>
									</li>
								</Link>

								<Link
									href='/#about'
									onClick={() => {
										window.scrollTo(0, scrollPosition);
									}}>
									<li
										className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase ${
											active === "About"
												? "text-white active-link px-1"
												: "text-[#FFFFFF99] px-1 navmenu"
										} hover:text-white font-medium cursor-pointer`}
										onClick={() => {
											setToggle(!toggle); // By clicking on the mobile menu, it automatically close the toggle
											setActive("About");
										}}>
										<span>About</span>
									</li>
								</Link>
								<li
									className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase service-menu ${
										active === "Services"
											? "text-white active-link px-1"
											: "text-[#FFFFFF99] px-1 navmenu"
									} hover:text-white font-medium cursor-pointer`}>
									<Link
										to='/services'
										onClick={() => {
											setActive("Services");
											setToggle(!toggle);

											window.scrollTo(0, 0);
										}}>
										<span>Services</span>
									</Link>
									<div
										className='arrow inline'
										onClick={() => setSubmebuToggle(!submebuToggle)}>
										<IoIosArrowDown className='inline ml-3 -translate-y-[10%]' />

										<div className={`${!submebuToggle ? "hidden" : "flex"} `}>
											<ul className='submenu bg-[#ffffff] text-[#4a4d4a] capitalize text-sm z-50'>
												{services.map((service) => (
													<Link
														key={service.id}
														to={`/services/${service.id}`}
														className='cursor-pointer'>
														<li>{service.title}</li>
													</Link>
												))}
											</ul>
										</div>
									</div>
								</li>
								<Link
									to='/contacts'
									onClick={() => {
										window.scrollTo(0, 0);
									}}>
									<li
										className={` hover:text-white cursor-pointer py-[10px] pr-0 pl-7 navlink text-[15px] font-medium uppercase ${
											active === "Contact"
												? "text-white active-link px-1"
												: "text-[#FFFFFF99] px-1 navmenu"
										} hover:text-white font-medium cursor-pointer`}
										onClick={() => {
											setActive("Contact");
											setToggle(!toggle);
										}}>
										<span>Contact</span>
									</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
