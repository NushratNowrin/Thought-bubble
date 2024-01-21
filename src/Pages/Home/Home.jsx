import About from "./About/About";
import Clients from "./Clients/Clients";
import Hero from "./Hero/Hero";

// import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<div>
				<Hero></Hero>
				<About></About>
				{/* <Testimonial></Testimonial> */}
				<Clients></Clients>
			</div>
		</div>
	);
};

export default Home;
