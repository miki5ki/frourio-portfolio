import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Flex, Box, Heading } from '@chakra-ui/react'
import { theme } from '../theme/index'
import { Sidebar } from '~/components/molecules/Sidebar'
import { Header } from '~/components/molecules/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex>
        <Sidebar />
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
