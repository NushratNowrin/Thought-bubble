import contactBg from "../../assets/contact/Contact-bg.jpg";
import Banner from "../../Utilities/Banner/Banner";
import "./Contact.css";
const Contact = () => {
	return (
		<div>
			<Banner
				bannerBg={contactBg}
				heading={"Contact"}
				breadcrumbs={"Home"}
				breadcrumbsUrl={"/"}></Banner>
		</div>
	);
};

export default Contact;
