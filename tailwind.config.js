module.exports = {
  content: ['./src/ui/**/*.{js,jsx,ts,tsx}', './client/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark'],
    darkTheme: 'dark',
  },
};
