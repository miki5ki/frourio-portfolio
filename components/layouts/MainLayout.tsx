import React from 'react'
import { Sidebar } from '../molecules/Sidebar'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from '../../theme/index'
import { RecoilRoot } from 'recoil'
import { Header } from '../molecules/Header'

export const MainLayout = (props: any) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Header />
        <Flex>
          <Sidebar />
          {props.children}
        </Flex>
      </ChakraProvider>
    </RecoilRoot>
  )
}
