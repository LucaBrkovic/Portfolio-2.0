/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			ss: "415px",
			ssmm: "448px",
			mmss: "463px",
			ssm: "570px",
			sm: "640px",
			md: "768px",
			mdg: "830px",
			xmd: "991px",
			lg: "1024px",
			xl: "1200px",
			"2xl": "1536px",
		},
		extend: {
      colors: {
        rgbaskill: "rgba(18,40,80, 0.30)",
		dimWhite: "rgba(255, 255, 255, 0.7)",
		rgbanavbar: "rgba(0,0,0, 0.25)",
      }
    },
	},
	plugins: [],
};
