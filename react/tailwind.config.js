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
      },
    },
  },
  plugins: [],
});
