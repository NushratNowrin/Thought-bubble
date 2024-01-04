import images from "./image.config";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			images: {
				...images,
			},
		},
	},
	plugins: [],
};
