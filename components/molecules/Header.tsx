import React from 'react'
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Flex,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverBody,
  RadioGroup,
  Radio,
  Link,
  Divider,
  VStack,
  Stack
} from '@chakra-ui/react'
import { MdOutlineNotifications } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()
  return (
    <Box
      bg="green.300"
      h="50px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex">
        <Heading size="lg" py={1} pl={2} color="gray.700">
          技術掲示板
        </Heading>
        <Input
          placeholder="キーワード入力"
          w="250px"
          bg="white"
          mx={10}
          h="35px"
          my={1}
        />
      </Box>
      <Box display="flex" alignItems="center" m={5}>
        <Button
          mx={5}
          bg="green.700"
          color="white"
          h="35px"
          onClick={() => router.push('/topics/create')}
          colorScheme="green"
        >
          投稿する
        </Button>
        <Icon as={MdOutlineNotifications} w={6} h={6} mx={2} />
        <Popover>
          <PopoverTrigger>
            <Icon as={BiUserCircle} w={6} h={6} mx={2} cursor="pointer" />
          </PopoverTrigger>
          <PopoverContent rounded="sm">
            <PopoverBody>
              <Stack>
                <Link>マイページ</Link>
                <Divider borderColor="gray.400" />
                <Link>新規登録</Link>
                <Link>下書き記事</Link>
                <Link>限定共有記事</Link>
                <Link>編集リクエスト</Link>
              </Stack>
              <Divider borderColor="whiteAlpha.400" />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  )
}
