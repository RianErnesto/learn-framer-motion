import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import light from '@/styles/themes/light'
import GlobalStyles from "@/styles/globals"
import SEO from "next-seo.config"
import { DefaultSeo } from "next-seo"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
