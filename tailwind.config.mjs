/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                copperplate: ['Copperplate Gothic', 'sans-serif'],
				copperplatelight: ['Copperplate Gothic Light', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
            },
			maxWidth: {
				'calc-100-minus-2em': 'calc(100% - 2em)',
			},
		},
	},
	plugins: [],
}
