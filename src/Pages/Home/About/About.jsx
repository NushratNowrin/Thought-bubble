import Image from "../../../assets/about/Haran-Rasalingam-01.jpg";
import "./About.css";
const About = () => {
	return (
		<div>
			<div className=' section-bg px-32 py-20'>
				<div className='about-container flex justify-around items-center gap-20'>
					<div>
						<h3 className='text-[#52565e] text-4xl leading-[3rem] font-semibold px-5'>
							Thought-Bubble offers coaching, counselling and psychotherapy for
							individuals and couples to help you:
						</h3>
					</div>
					<div>
						<img
							src={Image}
							alt='Haran Rasalingam'
							className='w-[1045px] rounded-lg image'
						/>
					</div>
				</div>
			</div>
			<div className='curve-down'></div>
		</div>
	);
};

export default About;
