import type { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import { TopicsTable } from '~/components/molecules/TopicsTable'
import { MainLayout } from '~/components/layouts/MainLayout'

const Home = () => {
  return (
    <>
      {/* <Box w="1200px" display="flex" justifyContent="center" my={4}> */}
      <TopicsTable />

      {/* </Box> */}
    </>
  )
}

export default Home

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
