import About from "./About/About";
import Clients from "./Clients/Clients";
import Hero from "./Hero/Hero";
// import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<About></About>
			{/* <Testimonial></Testimonial> */}
			<Clients></Clients>
		</div>
	);
};

export default Home;
