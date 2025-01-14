/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
        prefix: "cat",
        defaultFlavour: "latte",
    }),
	plugin(({ addUtilities }) => {
		addUtilities({
		".field-sizing-content": {
		"field-sizing": "content",
		},
		});
	}),
	],
}	
