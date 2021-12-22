import React from 'react'
import { Box, Button, Heading, Icon, Input } from '@chakra-ui/react'
import { MdOutlineNotifications } from 'react-icons/md'
import { BiUserCircle } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '~/atoms/userInfoState'

export const Header = () => {
  const router = useRouter()
  const userInfo = useRecoilValue(userInfoState)
  return (
    <Box
      bg="gray.300"
      h="50px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex">
        <Heading
          size="lg"
          py={1}
          pl={2}
          color="gray.700"
          onClick={() => router.push('/')}
          cursor="pointer"
        >
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
          bg="gray.700"
          color="white"
          h="35px"
          onClick={() => router.push('/topics/create')}
          colorScheme="gray"
        >
          投稿する
        </Button>
        <Icon as={MdOutlineNotifications} w={6} h={6} mx={2} />
        <Icon
          as={BiUserCircle}
          w={6}
          h={6}
          mx={2}
          cursor="pointer"
          onClick={() => router.push(`/mypage/${userInfo.id}`)}
        />
      </Box>
    </Box>
  )
}
