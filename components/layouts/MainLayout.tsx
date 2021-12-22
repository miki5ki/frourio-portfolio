import React from 'react'
import { LeftSidebar } from '../molecules/LeftSidebar'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from '../../theme/index'
import { RecoilRoot } from 'recoil'
import { Header } from '../molecules/Header'
import { RightSidebar } from '../molecules/RightSidebar'

export const MainLayout = (props: any) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Header />
        <Flex>
          <LeftSidebar />
          <Box w="1200px" display="flex" justifyContent="center" my={4}>
            <Box w="900px" bg="white">
              {props.children}
            </Box>
            <RightSidebar />
          </Box>
        </Flex>
      </ChakraProvider>
    </RecoilRoot>
  )
}
