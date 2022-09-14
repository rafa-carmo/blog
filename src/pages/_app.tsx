import { ThemeProvider } from 'contexts/ThemeContext'
import { AppProps } from 'next/app'

import '../../public/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
