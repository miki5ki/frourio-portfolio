import { Box } from '@chakra-ui/react'
import React from 'react'
import { TopicsTable } from '~/components/molecules/TopicsTable'

const Home = () => {
  return (
    <>
      <Box w="1200px" display="flex" justifyContent="center">
        <TopicsTable />
      </Box>
    </>
  )
}

export default Home
