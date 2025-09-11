/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        doHyeon: ['Do Hyeon', 'sans-serif'],
      },
      fontSize: {
        'hero-title': '4rem', // se quiser criar tamanho personalizado
        'hero-subtitle': '2.5rem',
      },
    },
  },
  plugins: [],
}
