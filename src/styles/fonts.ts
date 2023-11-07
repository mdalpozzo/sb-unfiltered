import {
  //   Inter,
  //   Lora,
  //   Source_Sans_3,
  Didact_Gothic,
  Montserrat,
  Bebas_Neue,
} from 'next/font/google'
// import localFont from 'next/font/local'

// define your variable fonts
// const inter = Inter()
// const lora = Lora()
// define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: '400' })
// const sourceCodePro700 = Source_Sans_3({ weight: '700' })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })

const didactGothic = Didact_Gothic({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  // display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

const bebas_neue = Bebas_Neue({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})

export {
  //   inter,
  //   lora,
  //   sourceCodePro400,
  //   sourceCodePro700,
  //   greatVibes,
  didactGothic,
  montserrat,
  bebas_neue,
}
