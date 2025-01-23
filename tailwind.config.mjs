/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: "#E3AF45",
      HeadingText: "#15141B",
      bodyText: "#212B36",
      whyBg: "#3B4753",
      cardBg: "#272B2E",
      reviewBg:"#F7F7F7",
       customGray: 'rgba(244, 244, 244, 0.4)'
      },
      fontFamily: {
        saira: ['Saira', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
      },

      keyframes: {
        colorFlow: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '0% center' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' },
        },
      },
      animation: {
        colorFlow: 'colorFlow 3s ease infinite',
        shine: 'shine 1.5s ease infinite',
      },

    },
  },
  plugins: [],
};
