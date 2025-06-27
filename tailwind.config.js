/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        hover: '0 10px 10px rgba(90, 117, 255, 0.25)'
      },
      animation: {
        'flash': 'flash 1s infinite',
        'bounce-1.5s': 'bounce 1.5s infinite',
        'bounce-1.8s': 'bounce 1.8s infinite',
        'bounce-2.2s': 'bounce 2.5s infinite',
        'bounce-2.6s': 'bounce 2.6s infinite',
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      }
    },
  },
  plugins: [require('daisyui'),],
};
