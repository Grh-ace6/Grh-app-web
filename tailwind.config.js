/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        '128': '38rem',
      },
      maxWidth: {
        '128': '98rem',
      },
      height: {
        '128': '38rem',
      }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['50px', '58px'],
    },
  },
  plugins: [],
}

