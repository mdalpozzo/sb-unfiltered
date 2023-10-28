'use client'

import Script from 'next/script'

export default function AppScripts() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-081HMZL1H1"
        id="google-analytics"
        strategy="afterInteractive"
        onReady={() => {
          // @ts-ignore
          window.dataLayer = window.dataLayer || []
          function gtag() {
            // @ts-ignore
            dataLayer.push(arguments)
          }
          // @ts-ignore
          gtag('js', new Date())

          // @ts-ignore
          gtag('config', 'G-081HMZL1H1')
        }}
      />
    </>
  )
}
