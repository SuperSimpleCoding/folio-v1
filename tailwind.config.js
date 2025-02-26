/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 }
        },
        'sparkle-particle': {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
          '50%': { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.8 },
          '100%': { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
        },
        shrink: {
          '0%, 100%': { height: '32px' },
          '50%': { height: '16px' }
        }
      },
      animation: {
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'sparkle-particle': 'sparkle-particle 1.5s ease-in-out infinite',
        'shrink': 'shrink 1s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/line-clamp")],
};
