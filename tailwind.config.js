/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "kown-p": "#433A32",
        "kown-p-900": "#1C1814",
        "kown-p-800": "#3D352F",
        "kown-p-700": "#423931",
        "kown-p-600": "#827A6F",
        "kown-p-500": "#C6C0BA",
        "kown-s": "#C78750",
        "kown-s-900": "#4C331E",
        "kown-s-800": "#99683F",
        "kown-s-700": "#C68E61",
        "kown-s-600": "#DEC0A7",
        "kown-s-500": "#EDDACA",
        kownwhite: "#FAF8F1",
        kownblack: "#1A1A1A",
        kownred: "#956C73",
        kownblue: "#323949",
      },
      height: {
        mobile: "350px",
        team: "500px",
        400: "25rem",
        500: "32rem",
      },
      backgroundImage: {
        "hero-image": "url('../public/images/hero03.jpg')",
        "hero-image2": "url('../public/images/Us.jpg')",
        "pattren-image": "url('../public/images/pattren.svg')",
        sec1: "url('../public/images/sectors/1.png')",
        sec2: "url('../public/images/sectors/2.png')",
        sec3: "url('../public/images/sectors/3.png')",
        sec4: "url('../public/images/sectors/4.png')",
        sec5: "url('../public/images/sectors/5.png')",
        sec6: "url('../public/images/sectors/6.png')",
        sec7: "url('../public/images/sectors/7.png')",
      },
    },
  },
  plugins: [],
};
