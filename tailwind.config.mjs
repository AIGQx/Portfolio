/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [
	plugin(({ addUtilities }) => {
		addUtilities({
		".field-sizing-content": {
		"field-sizing": "content",
		},
		});
	}),
	],
}	
