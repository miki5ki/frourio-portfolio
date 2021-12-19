import type { VFC } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Box,
  Icon,
  Flex,
  Text,
  Stack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TOPICS } from '~/const/TOPICS'
import useAspidaSWR from '@aspida/swr'
import { AiOutlineHome } from 'react-icons/ai'
import { BsTags } from 'react-icons/bs'
import { apiClient } from '~/utils/apiClient'

type Props = {
  title: string
}

export const TopicsTable: VFC<Props> = ({ title }) => {
  const router = useRouter()
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  console.log(tasks)

  return (
    <>
      <Box w="1000px">
        <Heading align="center" m={3}>
          {title}
        </Heading>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Flex alignItems="center" m={4}>
                <Icon as={AiOutlineHome} w={6} h={6} mx={2} />
                <Heading size="sm">ホーム</Heading>
              </Flex>
            </Tr>
            {TOPICS.map((topic) => (
              <Tr
                onClick={() => router.push(`/topics/${topic.id}`)}
                cursor="pointer"
                key={topic.id}
              >
                <Td>
                  <Stack display="flex" direction="column" spacing={2}>
                    <Text>
                      {topic.owner}が{topic.time}に投稿
                    </Text>
                    <Heading size="md">{topic.title}</Heading>
                    <Flex alignItems="center">
                      <Icon as={BsTags} mx={1}></Icon>
                      {<Text>{topic.tags[0]}</Text>}
                    </Flex>
                  </Stack>
                </Td>
              </Tr>
            ))}
            {tasks?.map((task) => (
              <Tr
                onClick={() => router.push(`/topics/${task.id}`)}
                cursor="pointer"
                key={task.id}
              >
                <Td>{task.label}</Td>
                <Td>{task.done}</Td>
                <Td>{task.id}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  )
}
