import contactBg from "../../assets/contact/Contact-bg.jpg";
import Banner from "../../Utilities/Banner/Banner";
import "./Contact.css";
const Contact = () => {
	return (
		<div>
			<Banner
				bannerBg={contactBg}
				heading={"Contact"}
				breadcrumbs={[
					{
						title: "Home",
						url: "/",
					},
				]}></Banner>
		</div>
	);
};

export default Contact;
