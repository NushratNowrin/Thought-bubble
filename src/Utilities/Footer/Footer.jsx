import { Link } from "react-router-dom";
import logo from "../../assets/thought_bubble_logo.gif";
import "./Footer.css";
const Footer = () => {
	const viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	const scrollPosition = (viewportHeight * 80) / 100;
	return (
		<footer className='footer'>
			<div className='main-footer relative px-5 sm:px-10 md:px-28 lg:px-52 pt-16 pb-10'>
				{/* background Overlay */}
				<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 z-10'></div>

				<div className='relative z-20 text-white'>
					<div className='flex flex-col text-center sm:grid grid-cols-4 sm:justify-around gap-10 sm:gap-20 lg:gap-40'>
						<div className='mx-auto'>
							<img className='max-w-36' src={logo} alt='' />
						</div>
						<div className='col-span-2'>
							<h2 className='footer-description text-[28px] font-[700] mb-5'>
								THOUGHT BUBBLE
							</h2>
							<p className='footer-description text-sm'>
								Woodside Park Underground Station (Northern Line) London N12 8SE
							</p>
						</div>
						<div>
							<p className='font-semibold links-heading mb-2'>Useful Links</p>
							<ul className=' list-none'>
								<li
									className={` text-[#ffffff99] hover:text-white cursor-pointer py-2 font-medium tracking-wide transition-all duration-300 ease-in-out`}>
									<Link
										to='/'
										onClick={() => {
											window.scrollTo(0, 0);
										}}>
										<span>Home</span>
									</Link>
								</li>
								<li
									className={`  text-[#ffffff99] hover:text-white cursor-pointer py-2 font-medium tracking-wide transition-all duration-300 ease-in-out`}>
									<a
										href='#about'
										onClick={() => {
											window.scrollTo(0, scrollPosition);
										}}>
										<span>About Us</span>
									</a>
								</li>
								<li
									className={`  text-[#ffffff99] hover:text-white cursor-pointer py-2 font-medium tracking-wide transition-all duration-300 ease-in-out`}>
									<Link
										to='/services'
										onClick={() => {
											window.scrollTo(0, 0);
										}}>
										<span>Services</span>
									</Link>
								</li>
								<li
									className={` text-[#ffffff99] hover:text-white cursor-pointer py-2 font-medium tracking-wide transition-all duration-300 ease-in-out`}>
									<Link
										to='/contact'
										onClick={() => {
											window.scrollTo(0, 0);
										}}>
										<span>Contact</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='copyright-footer relative text-center px-5 sm:px-28 lg:px-52'>
				{/* background Overlay */}
				<div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 z-10'></div>
				<div className='h-[1px] w-[100%] bg-white mx-auto'></div>
				<div className='pt-10 pb-16 flex flex-col justify-center items-center gap-5 text-white relative z-20'>
					<p className='text-sm'>
						© 2010-2023 <span className='font-semibold'>Haran Rasalingam</span>{" "}
						| All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
