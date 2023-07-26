const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          primary: '#7b000b',
          main: '#cf0029'
      },
    },
  },
  plugins: [],
});
