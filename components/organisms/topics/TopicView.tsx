import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react'
import { apiClient } from '~/utils/apiClient'
import useAspidaSWR from '@aspida/swr'
import { BsTags } from 'react-icons/bs'
import { useRouter } from 'next/router'

export const TopicView = () => {
  const router = useRouter()
  const id = router.query.id as string
  const {
    data: topic,
    error,
    revalidate
  } = useAspidaSWR(apiClient.topics._topicId(id))

  console.log(topic)
  console.log(id)

  if (!topic) return <Spinner />

  return (
    <Stack m={6}>
      <Flex alignItems="center">
        <Image
          src="https://bit.ly/dan-abramov"
          boxSize="25px"
          borderRadius="full"
        />
        <Text fontWeight="bold" ml={3}>
          {topic.userName}
        </Text>
      </Flex>
      <Text>投稿日 {topic.createdAt}</Text>
      <Heading size="lg">{topic?.title}</Heading>
      <Flex alignItems="center">
        <Icon as={BsTags} mx={1} />
        <Text>{topic.tag}</Text>
      </Flex>
      <Text>{topic.message}</Text>
    </Stack>
  )
}
