/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bktutor-blue': '#0E78C4',
      },
      boxShadow: {
        'job-card': '0px 0px 8px #999',
      },
      width: {
        'card-img-w': '100px',
        'card-fb-icon-w': '40px',

      },
      height: {
        'card-img-h': '100px',
        'card-fb-icon-h': '40px',
      },
      maxWidth: {
        'card-img-max-w': '100px',
      },
      inset: {
        '90p': '90%',
      }
    },
  },
  plugins: [],
}