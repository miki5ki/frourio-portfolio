import { Table, Thead, Tbody, Tr, Th, Td, Heading, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TOPICS } from '~/const/TOPICS'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import { TopicsTable } from '~/components/molecules/TopicsTable'

export const AllTopicsTable = () => {
  const router = useRouter()
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  console.log(tasks)

  return (
    <>
      <Box w="1000px">
        <TopicsTable title="みんなの記事一覧" />
      </Box>
    </>
  )
}
