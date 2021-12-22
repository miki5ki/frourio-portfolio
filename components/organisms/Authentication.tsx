import { useState, useCallback, ChangeEvent } from 'react'
import {
  Box,
  Button,
  Heading,
  Input,
  Flex,
  Stack,
  Alert,
  AlertIcon,
  useToast
} from '@chakra-ui/react'
import { apiClient } from '~/utils/apiClient'
import type { UserInfo } from '$/types'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { userInfoState } from '~/atoms/userIdState'

type Authentication = {
  id: string
  pass: string
}
export const Authentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState('')
  const toast = useToast()
  const router = useRouter()
  const [userInfo, setUserInfo] = useRecoilState(userInfoState)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  console.log(userInfo)
  // const editIcon = useCallback(
  //   async (e: ChangeEvent<HTMLInputElement>) => {
  //     if (!e.target.files?.length) return

  //     setUserInfo(
  //       await apiClient.user.$post({
  //         headers: { authorization: token },
  //         body: { icon: e.target.files[0] }
  //       })
  //     )
  //   },
  //   [token]
  // )

  const handleLogin = useCallback(async (data) => {
    let newToken = ''

    try {
      newToken = `Bearer ${
        (
          await apiClient.token.$post({
            body: { id: data.id, pass: data.password }
          })
        ).token
      }`
      setToken(newToken)
    } catch (e) {
      return toast({
        title: `アカウントもしくはパスワードが正しくありません。`,
        position: 'top',
        isClosable: true,
        status: 'error'
      })
    }

    setUserInfo(
      await apiClient.user.$get({ headers: { authorization: newToken } })
    )
    setIsLoggedIn(true)
    router.push('/')
  }, [])

  const logout = useCallback(() => {
    setToken('')
    setIsLoggedIn(false)
  }, [])

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <Box bg="white" w="600px" h="auto" m={5} p={5}>
        <Stack spacing={4} align="center">
          <Heading m={3} size="lg">
            技術掲示板にログイン
          </Heading>
          <Input placeholder="idを入力" id="id" {...register('id')} w="200px" />
          <Input
            placeholder="パスワードを入力"
            id="password"
            {...register('password')}
            w="200px"
            type="password"
          />
          <Button type="submit" w="200px">
            ログイン
          </Button>
        </Stack>
      </Box>
    </form>
  )
}
