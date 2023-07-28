const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#7b000b',
        main: '#cf0029'
      },
      backgroundImage: {
        'slider-01': "linear-gradient(rgba(255, 0, 0, 0.30), rgba(0, 0, 0, 0.8)), url('/react/src/assets/img/carousel-01.jpg')",
        'slider-02': "linear-gradient(rgba(255, 0, 0, 0.30), rgba(0, 0, 0, 0.8)), url('/src/assets/img/carousel-02.jpg')",
        'slider-03': "linear-gradient(rgba(255, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url('/src/assets/img/carousel-03.jpg')",
        'slider-04': "linear-gradient(rgba(255, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url('/src/assets/img/carousel-04.jpg')",
        'hero': "linear-gradient(rgba(245, 245, 245, 1), rgba(245, 245, 245, 0.7), rgba(255, 0, 0, 0.65)), url('./src/assets/img/bg-red-2.png')",
        'services': "linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5), rgba(255, 0, 0, 0.8)), url('./src/assets/img/bg-red.png')",
        'subscribe': "linear-gradient(rgba(123, 0, 11, 0.5), rgba(123, 0, 11, 0.8)), url('./src/assets/img/bg-red-3.png')",
        'stats': "url('./src/assets/img/bg-red-4.png')",

      },
      fontSize: {
        title: '50px',
        subheader: '25px',
      },
    },
  },
  plugins: [],
});
