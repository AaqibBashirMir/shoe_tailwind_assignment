/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('https://media.istockphoto.com/id/1154075769/photo/beautiful-landscape-with-single-homes-in-middle-of-the-nature.webp?b=1&s=170667a&w=0&k=20&c=gKg7mFFSIIOqc2IBLaH1Wh0y1L-BZRX_a7Q_qlFopSo=')",
      }
    },
  },
  plugins: [],
}

