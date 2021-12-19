import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { MdAutoGraph } from 'react-icons/md'
const userId = 3
export const Sidebar = () => {
  const router = useRouter()
  return (
    <Box w="200px" minHeight="calc(100vh - 50px)" bg="gray.100">
      <Flex direction="column">
        <Stack spacing={4} ml={2}>
          <Heading mt={5} size="sm">
            記事フィード
          </Heading>
          <Link
            display="flex"
            _hover={{ bg: 'gray.400' }}
            rounded="md"
            w="180px"
            p={1}
          >
            <Icon as={AiOutlineHome} w={6} h={6} mx={1} />
            <Text>ホーム</Text>
          </Link>
          <Link
            display="flex"
            _hover={{ bg: 'gray.400' }}
            p={1}
            w="180px"
            rounded="md"
          >
            <Icon as={BiTimeFive} w={6} h={6} mx={1} />
            <Text>タイムライン</Text>
          </Link>
          <Link
            display="flex"
            _hover={{ bg: 'gray.400' }}
            w="180px"
            rounded="md"
            p={1}
          >
            <Icon as={MdAutoGraph} w={6} h={6} mx={1} />
            <Text>トレンド</Text>
          </Link>
        </Stack>
        <Box
          h="100px"
          onClick={() => router.push(`/mypage/${userId}`)}
          mt={4}
          ml={2}
          position="absolute"
          bottom="0"
        >
          <Button m={5} w="150px" _hover={{ bg: 'gray.400' }}>
            ログアウト
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
