import React from 'react'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import { theme } from '../../theme/index'
import { RecoilRoot } from 'recoil'

export const MyPageLayout = (props: any) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Flex>
          <Box bg="red">aaaa</Box>
          <Box w="900px" bg="white" justifyContent="center" my={4}>
            {props.children}
          </Box>
        </Flex>
      </ChakraProvider>
    </RecoilRoot>
  )
}
