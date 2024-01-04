import Image from "../../../assets/about/Haran-Rasalingam-01.jpg";
import "./About.css";
const About = () => {
	return (
		<div className='overflow-hidden' id='about'>
			<div className='section-bg px-32 py-20 '>
				<div className='about-container flex justify-around items-center gap-20'>
					<div>
						<h3 className='about-heading text-[#52565e] text-4xl leading-[3rem] font-semibold  relative mb-8'>
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
