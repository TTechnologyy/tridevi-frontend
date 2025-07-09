/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'pop-fade-in': 'popFadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'slide-in-left': 'slideInLeft 0.6s ease-out both',
        'bounce-in': 'bounceIn 0.6s ease-out both',
      },
      keyframes: {
        popFadeIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8) translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1) translateY(0)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-40px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        bounceIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)',
          },
          '60%': {
            opacity: 1,
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
