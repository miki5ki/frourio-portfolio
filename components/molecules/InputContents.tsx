import React, { useRef, useState, VFC } from 'react'
import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/router'
import { Heading } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '~/atoms/userInfoState'

type Props = {
  editable: boolean
  handleDelete: any
}
export const InputContents: VFC<Props> = ({ editable, handleDelete }) => {
  const userInfo = useRecoilValue(userInfoState)
  const router = useRouter()
  const {
    register,
    formState: { errors },
    getValues
  } = useFormContext()

  const tag = getValues('tag')

  return (
    <Box w="auto" bg="white" p={6} mt={4}>
      <Center>
        <Heading size="lg">記事の{editable ? '編集' : '新規登録'}</Heading>
      </Center>
      <Stack spacing={5} mt={2}>
        <FormControl isInvalid={errors.title}>
          <FormLabel>タイトル</FormLabel>
          <Input
            type="text"
            id="title"
            {...register('title', {
              required: 'タイトルを入力してください',
              maxLength: {
                value: 255,
                message: 'タイトルは225文字以内で入力してください'
              }
            })}
          ></Input>
        </FormControl>
        <FormControl>
          <FormLabel>本文</FormLabel>
          <Textarea
            h="300px"
            id="message"
            {...register('message', {
              required: '本文を入力してください'
            })}
          ></Textarea>
        </FormControl>
        <FormControl>
          <FormLabel>タグ</FormLabel>
          <RadioGroup colorScheme="gray" id="tag" defaultValue={tag}>
            <Stack direction="row">
              <Radio value="html" {...register('tag')}>
                html
              </Radio>
              <Radio value="css" {...register('tag')}>
                css
              </Radio>
              <Radio value="Javascript" {...register('tag')}>
                JavaScript
              </Radio>
              <Radio value="TypeScript" {...register('tag')}>
                TypeScript
              </Radio>
              <Radio value="React" {...register('tag')}>
                React
              </Radio>
              <Radio value="Next.js" {...register('tag')}>
                Next.js
              </Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      </Stack>
      <Button
        type="submit"
        colorScheme="gray"
        bg="gray.700"
        mt={5}
        mr={3}
        color="white"
      >
        {editable ? '保存' : '投稿'}
      </Button>
      <Button
        variant="outline"
        mt={5}
        mr={3}
        onClick={
          editable
            ? () => router.push(`/mypage/${userInfo.id}`)
            : () => router.push('/topics')
        }
      >
        キャンセル
      </Button>
      {editable ? (
        <Button mt={5} onClick={handleDelete}>
          削除
        </Button>
      ) : null}
    </Box>
  )
}
