module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          animation: {
              spin: 'spin 2s linear infinite',
              loading: 'loading 4s infinite',
          },
          fontFamily: {
            courier: ['Courier New', 'monospace'],
          },
      },
  },
  variants: {
      extend: {
      },
  },
  plugins: [],
};
