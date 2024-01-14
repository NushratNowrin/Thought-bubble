import Image from "../../../assets/about/Haran-Rasalingam-01.jpg";
import "./About.css";
const About = () => {
	return (
		<div className='overflow-hidden mb-5 ' id='about'>
			<div className='section-bg px-5 xs:px-10 md:px-20 lg:px-32 pt-20'>
				<div className='about-container grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10'>
					<div className='sm:col-span-2 md:col-span-1 lg:col-span-2'>
						<h3 className='about-heading text-[#52565e] text-xl md:text-2xl lg:text-4xl lg:leading-[3rem] font-semibold  relative mb-8'>
							Thought-Bubble offers coaching, counselling and psychotherapy for
							individuals and couples to help you:
						</h3>
						<ul className='list-inside list-disc ml-5 py-5 text-[#4a4d4a]'>
							<li>design your unique path which fits with your values</li>
							<li>
								personally and professionally, socially and psychologically
							</li>
							<li>get the best out of your life</li>
							<li>grow in terms of your personal development</li>
							<li>tackle obstacles along the way</li>
						</ul>

						<p className='text-[#4a4d4a] text-sm'>
							Life is always full of ups and downs. Thought-Bubble encourages a
							courageous but down-to-earth perspective to achieve fulfilment in
							a complex world.
						</p>
					</div>
					<div>
						<img
							src={Image}
							alt='Haran Rasalingam'
							className='w-[1100px] rounded-lg image'
						/>
					</div>
				</div>
			</div>
			<div className='curve-down'></div>
		</div>
	);
};

export default About;
