/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'full': '100%',
      },
      backgroundImage: {
        'custom-bg-1': "url('https://i.pinimg.com/enabled_hi/564x/56/54/7a/56547a21860b1dd9fdbc6d5e2d9b4728.jpg')", // Image for one component
        'custom-bg-2': "url('https://i.pinimg.com/564x/10/73/43/107343712a703bf195fbe892453ad7e7.jpg')", // Image for another component
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "default", "retro", "cyberpunk", "valentine", "aqua", "synthwave"],
  },
}

