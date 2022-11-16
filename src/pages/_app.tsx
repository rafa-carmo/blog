import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'contexts/ThemeContext'
import { AppProps } from 'next/app'
import { useApollo } from 'utils/apollo'

import '../../public/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
