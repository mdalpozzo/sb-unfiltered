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
        'light-bg': colors.zinc[50],
        'light-text': colors.zinc[950],
        'light-line': colors.zinc[300],
        // 'dark-bg': colors.zinc[900],
        'dark-bg': colors.black,
        'dark-text': colors.zinc[100],
        'dark-line': colors.zinc[500],
      },
      spacing: {
        navbar: '4rem',
        navbanner: '8rem',
        'base-padding-top': '7rem',
      },
    },
  },
  plugins: [],
}
export default config
