import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // aspectRatio: {
      //   '4/3': '4 / 3',
      // },
      colors: {
        'light-bg': colors.zinc[50],
        'light-text': colors.zinc[950],
        'light-line': colors.zinc[300],
        // 'dark-bg': colors.zinc[900],
        'dark-bg': colors.black,
        'dark-text': colors.zinc[100],
        'dark-line': colors.zinc[500],
      },
    },
  },
  plugins: [],
}
export default config
