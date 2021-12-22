import type { VFC } from 'react'
import {
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
  Box,
  Icon,
  Flex,
  Text,
  Stack,
  Image
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useAspidaSWR from '@aspida/swr'
import { AiOutlineHome } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { BsTags } from 'react-icons/bs'
import { apiClient } from '~/utils/apiClient'
import { Topic } from '../../server/types/index'

export const TopicsTable: VFC = () => {
  const router = useRouter()

  const {
    data: topics,
    error,
    revalidate
  } = useAspidaSWR(apiClient.topics, { query: { limit: 5 } })

  const handlePathChange = (topic: Topic) => {
    if (router.pathname.includes('mypage')) {
      router.push(`/topics/edit/${topic.id}`)
    } else {
      router.push(`/topics/${topic.id}`)
    }
  }

  return (
    <>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Flex alignItems="center" m={4}>
              <Icon as={AiOutlineHome} w={6} h={6} mx={2} />
              <Heading size="sm">ホーム</Heading>
            </Flex>
          </Tr>
          {topics &&
            topics.map((topic: Topic) => (
              <Tr
                onClick={() => handlePathChange(topic)}
                cursor="pointer"
                key={topic.id}
              >
                <Td>
                  <Stack display="flex" direction="column" spacing={2}>
                    <Text>
                      <Flex alignItems="center">
                        <Image
                          src="https://bit.ly/dan-abramov"
                          boxSize="25px"
                          borderRadius="full"
                        />
                        <Text ml={1}>{topic.userName}さんが</Text>
                        <Text>{topic.createdAt}に投稿</Text>
                      </Flex>
                    </Text>
                    <Heading size="md">{topic.title}</Heading>
                    <Flex alignItems="center">
                      <Icon as={BsTags} mx={1} />
                      <Text>{topic.tag}</Text>
                    </Flex>
                    <Flex alignItems="center">
                      <Icon as={BiLike} mx={1} />
                      {/* <Text>{topic.like}</Text> */}
                      <Text>45</Text>
                    </Flex>
                  </Stack>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  )
}
