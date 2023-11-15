/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [typography, aspectRatio, daisyui],
  daisyui: {
    themes: ['fantasy', 'dark'], // or []
  },
}
