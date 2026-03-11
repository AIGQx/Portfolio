/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cat: {
					base: "#1e1e2e",
					mantle: "#181825",
					crust: "#11111b",
					text: "#cdd6f4",
					subtext0: "#a6adc8",
					surface0: "#313244",
					mauve: "#cba6f7",
					pink: "#f5c2e7",
					red: "#f38ba8",
					peach: "#fab387",
					flamingo: "#f2cdcd",
					sky: "#89dceb",
					teal: "#94e2d5",
					lavender: "#b4befe",
					blue: "#89b4fa",
				},
			},
		},
	},
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
