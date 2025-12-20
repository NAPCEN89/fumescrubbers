// tailwind.config.js (FULLY UPDATED & COMBINED)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Ensure this line covers your source files
  ],
  theme: {
    extend: {
      colors: {
        // --- HERO SECTION COLORS ---
        'napcean-blue': '#00BFFF',
        'napcean-blue-hover': '#00A3E0',
        'white-transparent': 'rgba(255,255,255,0.6)',

        // --- INDUSTRIAL APPLICATIONS SECTION COLORS ---
        'card-glass': 'rgba(255, 255, 255, 0.08)', // Card Background
        'button-blue-light': 'rgba(0, 191, 255, 0.15)', // Learn More Button BG
        'button-blue-semi': 'rgba(0, 191, 255, 0.18)', // Explore All Button BG
        'dialog-dark-title': '#0f1b3a', // Dialog Header BG
        'dialog-dark-content': '#16213e', // Dialog Content BG
      },
      boxShadow: {
        // --- HERO SECTION SHADOW ---
        'napcean-button': '0 6px 16px rgba(0,191,255,0.3)',

        // --- INDUSTRIAL APPLICATIONS SECTION SHADOWS ---
        'card-hover-blue': '0 16px 32px rgba(0, 191, 255, 0.25)', // Card Hover Shadow
        'button-blue-hover': '0 8px 20px rgba(0, 191, 255, 0.3)', // Explore All Button Hover Shadow
      },
      // --- MARQUEE ANIMATION FOR DESKTOP ---
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      // --- FONT ---
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}