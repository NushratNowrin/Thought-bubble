import contactBg from "../../assets/contact/Contact-bg.jpg";
import Banner from "../../Utilities/Banner/Banner";
import Capcha from "./Capcha/Capcha";
import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";
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

			<ContactForm></ContactForm>
		</div>
	);
};

export default Contact;
