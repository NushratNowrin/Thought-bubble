import "./Contact.css";
import ContactForm from "./ContactForm/ContactForm";
const Contact = () => {
	return (
		<div className=''>
			<div className='h-[100px] bg-neutral-800 '></div>

			<ContactForm></ContactForm>
			<div className='h-[5px] translate-y-[1200px]'></div>
		</div>
	);
};

export default Contact;
