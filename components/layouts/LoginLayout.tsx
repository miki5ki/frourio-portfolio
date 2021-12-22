import React from 'react'
import { Center, ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../theme/index'
import { RecoilRoot } from 'recoil'

export const LoginLayout = (props: any) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Center m={5}>{props.children}</Center>
      </ChakraProvider>
    </RecoilRoot>
  )
}
