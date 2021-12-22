import type { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import { TopicsTable } from '~/components/molecules/TopicsTable'
import { MainLayout } from '~/components/layouts/MainLayout'

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

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
