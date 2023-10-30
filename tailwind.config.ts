import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
// import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   xs: '400px',
    //   ...defaultTheme.screens,
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        'xs-teaser': '14 / 9',
      },
      colors: {
        'light-bg': colors.zinc[100],
        'light-text': colors.zinc[950],
        'light-accent': colors.zinc[950],
        'light-accent-text': colors.zinc[200],
        'light-line': colors.zinc[300],
        'nav-bg-light': colors.zinc[100],
        'dark-bg': colors.black,
        'dark-text': colors.zinc[200],
        'dark-accent': colors.zinc[100],
        'dark-accent-text': colors.zinc[950],
        'dark-line': colors.zinc[500],
        'nav-bg-dark': colors.black,
        'theme-primary': colors.green[200],
        'theme-compliment': colors.emerald[500],
      },
      spacing: {
        navbar: '3rem',
        navbanner: '8rem',
        'base-padding-top': '7rem',
      },
    },
  },
  plugins: [],
}
export default config
