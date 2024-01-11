import { useState } from "react";
import axios from "axios";
import Heading from "../../../Utilities/Heading/Heading";
import Capcha from "../Capcha/Capcha";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		emailAddress: "",
		contactNumber: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [showError, setShowError] = useState("");
	const [success, setSuccess] = useState("");
	const [isVerified] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Basic form validation
		if (!formData.name || !formData.emailAddress || !formData.message) {
			alert("Name, Email, and Message are required fields.");
			return;
		}

		setSuccess("");
		setShowError("");
		if (isVerified) {
			// Proceed with your form submission logic
			console.log("Form submitted!");
		} else {
			console.log("Please complete the reCAPTCHA verification.");
		}

		try {
			// Sending form data to the server
			const response = await axios.post(
				"/thought-bubble.co.uk/contact.php",
				formData
			);

			const successMessage =
				response.data ||
				"Thank you for your submission! We will be in touch shortly.";
			// Handle successful submission
			setSubmitted(true);
			setSuccess(successMessage);

			setSubmitted(true);
		} catch (error) {
			// Handle submission error
			const errorMessage = error.response?.data || error.message;
			setShowError(errorMessage);
			setShowError(errorMessage);
		}
	};

	return (
		<div className='mx-auto p-8 bg-[#f2dab8] flex flex-col justify-center items-center  rounded-md shadow-md'>
			<Heading heading={"Contact Us"}></Heading>
			{submitted ? (
				<p className='text-green-500'>
					Thank you for your enquiry. We will be in touch shortly.
				</p>
			) : (
				<form onSubmit={handleSubmit} className='sm:w-[50%] w-[100%] mt-5'>
					<div className='mb-4'>
						<label htmlFor='name' className='text-lg font-medium text-gray-700'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='form-input w-[100%] px-3 py-2 mt-2 rounded-lg'
						/>
					</div>

					<div className='mb-4'>
						<label
							htmlFor='emailAddress'
							className='text-lg font-medium text-gray-700'>
							Email Address:
						</label>
						<input
							type='email'
							id='emailAddress'
							name='emailAddress'
							value={formData.emailAddress}
							onChange={handleChange}
							className='form-input w-[100%] px-3 py-2 mt-2 rounded-lg'
						/>
					</div>

					<div className='mb-4'>
						<label
							htmlFor='contactNumber'
							className='text-lg font-medium text-gray-700'>
							Contact Number:
						</label>
						<input
							type='text'
							id='contactNumber'
							name='contactNumber'
							value={formData.contactNumber}
							onChange={handleChange}
							className='form-input w-[100%] px-3 py-2 mt-2 rounded-lg'
						/>
					</div>

					<div className='mb-4'>
						<label
							htmlFor='message'
							className='text-lg font-medium text-gray-700'>
							Message:
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							className='form-input w-[100%] px-3 py-2 mt-2 rounded-lg'
							rows='3'></textarea>
					</div>
					{/* Recapcha */}
					<Capcha></Capcha>
					<div className='text-amber-700 font-bold mb-3'>{showError}</div>
					<div className='text-green-600 mb-3'>{success}</div>
					<div className='w-[100%] text-center'>
						<button
							type='submit'
							className='bg-green-500 text-white font-semibold px-4 py-2 rounded-md transition-all duration-200 ease-in-out hover:bg-green-600'>
							Submit
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
