import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
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
import { useCallback } from 'react'

export const InputContents = () => {
  const router = useRouter()
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const [tag, setTag] = useState('React')

  return (
    <Box w="800px" bg="white" p={6} mt={4}>
      <Stack spacing={5}>
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
          <RadioGroup colorScheme="green" id="tag">
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
      <Button type="submit" colorScheme="green" bg="green.700" mt={5}>
        投稿
      </Button>
    </Box>
  )
}
