/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1F242D',
        'custom-black': '#333',
        'primary-blue': '#00EEFF',
        'primary-blue-hover': '#D9E4F4',
        'primary-blue-darker': '#0d949e',
        'primary-section': '#171C23',
      },
      fontSize: {
        dynamic: 'clamp(0rem, 10vw, 0.8rem)',
      },
      minHeight: {
        customMinHeight: '250px',
      },
      minWidth: {
        customMinHeight: '50px',
      },
      maxWidth: {
        customMaxWidth: '200px',
      },
    },
  },
  plugins: [],
};
