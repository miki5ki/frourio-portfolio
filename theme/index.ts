import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: '#F2F2F2',
        color: '#2E2E2E'
      }
    }
  },
  colors: {
    brand: {
      // 900: '#1a365d',
      // 800: '#153e75',
      // 700: '#2a69ac'
    }
  }
})
