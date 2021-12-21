import { Box, Center, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import { Header } from '~/components/molecules/Header'
import { Sidebar } from '~/components/molecules/Sidebar'
import { TopicsTable } from '~/components/molecules/TopicsTable'
import type { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/index'

const Home = () => {
  return (
    <>
      <Box w="1200px" display="flex" justifyContent="center" my={4}>
        <TopicsTable />
        <Box w="300px">
          <Box bg="white" w="250px" h="150px" mx={6}>
            aaaaa
          </Box>
          <Box bg="white" w="250px" h="250px" mx={6} my={4}>
            aaaaa
          </Box>
          <Box bg="white" w="250px" h="300px" mx={6}>
            aaaaa
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Flex>
          <Sidebar />
          {page}
        </Flex>
      </ChakraProvider>
    </>
  )
}
