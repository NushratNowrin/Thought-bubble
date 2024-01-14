import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Capcha = () => {
	const [, setVerified] = useState(false);
	const recaptchaKey = import.meta.env.VITE_SITE_KEY;
	// console.log(recaptchaKey);

	const handleVerification = (response) => {
		console.log("reCAPTCHA verification successful:", response);
		setVerified(true);
	};

	return (
		<div className='w-full'>
			{/* reCAPTCHA component */}
			<ReCAPTCHA sitekey={recaptchaKey} onChange={handleVerification} />
		</div>
	);
};

export default Capcha;
