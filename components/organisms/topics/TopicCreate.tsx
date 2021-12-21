import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Topic } from '../../../server/types/index'
import { InputContents } from '../../molecules/InputContents'
import { apiClient } from '../../../utils/apiClient'
import { useRouter } from 'next/router'

export const TopicCreate = () => {
  const methods = useForm()
  const router = useRouter()

  const onSubmit = async (data: Topic) => {
    try {
      console.log(data)
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      await apiClient.topics.post({
        body: {
          title: `${data.title}`,
          message: `${data.message}`,
          tag: `${data.tag}`,
          like: 4,
          userName: 'frourio',
          userId: 123,
          createdAt: `${year}年${month + 1}月${day}日`
        }
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContents />
      </form>
    </FormProvider>
  )
}
