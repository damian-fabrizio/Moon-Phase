/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bgnight1: "#020015",
        bgnight2: "#141414",
        bgnight3: "#36454F",
        bgnight4: "#2b3c4d",
        bgnight5: "#222f3d",
        bgnight6: "#19232c",
        bgnight7: "#10161c",
        bgnight8: "#07090c",
        bgnight9: "#10151c",
        bgnight10: "#2c3a4d",
        bgnight11: "#191919",
      },
      boxShadow:{
        'white-glow': '0 0 8px rgba(255, 255, 255, 0.5)',
      },
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        scope: ["Scope One", "serif"],
        bitter: ["Bitter", "serif"],
        vollkorn: ["Vollkorn", "serif"],
        tinos: ["Tinos", "serif"],
        
      },

      boxShadow: {
        boxshadow: "0px 0px 20px rgba(0,0,0,0.4)",
      }
    },
  },
  plugins: [],
}
