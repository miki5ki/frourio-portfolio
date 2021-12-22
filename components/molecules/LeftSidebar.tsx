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
import { AiOutlineHome } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { MdAutoGraph } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { userInfoState } from '~/atoms/userInfoState'
const userId = 3
export const LeftSidebar = () => {
  const router = useRouter()
  const setUserInfo = useSetRecoilState(userInfoState)
  return (
    <Box w="200px" minHeight="calc(100vh - 50px)" ml={6}>
      <Flex direction="column">
        <Stack spacing={4} mx={2}>
          <Heading mt={5} size="sm">
            記事フィード
          </Heading>
          <Link
            display="flex"
            _hover={{ bg: 'gray.200' }}
            rounded="md"
            w="150px"
            p={1}
            onClick={() => router.push('/')}
          >
            <Icon as={AiOutlineHome} w={6} h={6} mx={1} />
            <Text>ホーム</Text>
          </Link>
          <Link
            display="flex"
            _hover={{ bg: 'gray.200' }}
            p={1}
            w="150px"
            rounded="md"
          >
            <Icon as={BiTimeFive} w={6} h={6} mx={1} />
            <Text>タイムライン</Text>
          </Link>
          <Link
            display="flex"
            _hover={{ bg: 'gray.200' }}
            w="150px"
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
          position="absolute"
          bottom="0"
        >
          <Button
            p={2}
            mx={2}
            w="150px"
            _hover={{ bg: 'gray.200' }}
            variant="outline"
            bg="white"
            color="black"
            onClick={() => router.push('/login')}
          >
            ログアウト
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}
