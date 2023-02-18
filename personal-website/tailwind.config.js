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
			colors: {
				primary: "var(--color-primary)"
			},
			textColor: {
				skin: {
					base: "var(--color-text-base)",
					muted: "var(--color-text-muted)",
				}
			},
			backgroundColor: {
				skin: {
					base: "var(--color-background-base)",
					suport: "var(--color-background-muted)"
				}
			}
		},
	},
	plugins: [],
}