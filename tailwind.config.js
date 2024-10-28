const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './imports/ui/**/*.{js,jsx,ts,tsx}',
    './client/*.html',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
};
