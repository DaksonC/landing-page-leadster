import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
