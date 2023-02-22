/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				signika: ["var(--font-signika)"],
				calibri: "calibri"
			},
			screens: {
				xs: "360px",
				sm: "480px",
			},
			colors: {
				primary: "var(--color-primary)",
			},
			textColor: {
				skin: {
					base: "var(--color-text-base)",
					muted: "var(--color-text-muted)",
				},
			},
			backgroundColor: {
				skin: {
					base: "var(--color-background-base)",
					muted: "var(--color-background-muted)",
					support: "var(--color-background-support)",
				},
			},
		},
	},
	plugins: [],
}
