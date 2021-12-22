import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Topic } from '~/server/types'
import { apiClient } from '~/utils/apiClient'
import useAspidaSWR from '@aspida/swr'
import { useRouter } from 'next/router'
import { InputContents } from '../../molecules/InputContents'
import { Spinner } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '~/atoms/userInfoState'

export const TopicEdit = () => {
  const router = useRouter()
  const id = router.query.id as string
  const {
    data: topic,
    error,
    revalidate
  } = useAspidaSWR(apiClient.topics._topicId(parseInt(id)))
  const userInfo = useRecoilValue(userInfoState)

  const methods = useForm()
  console.log(topic)

  const onSubmit = async (data: Topic) => {
    try {
      await apiClient.topics._topicId(parseInt(data.id)).patch({
        body: {
          title: data.title,
          message: data.message,
          tag: data.tag
        }
      })
    } catch (error) {
      console.log(error)
    }
    router.push(`/mypage/${userInfo.id}`)
  }

  const handleDelete = async () => {
    const id = router.query.id as string
    try {
      if (id) {
        await apiClient.topics._topicId(parseInt(id)).delete()
      }
    } catch (error) {
      console.log(error)
    }
    router.push(`/mypage/${userInfo.id}`)
  }

  if (!topic) return <Spinner />

  methods.setValue('title', topic.title)
  methods.setValue('message', topic.message)
  methods.setValue('tag', topic.tag)
  methods.setValue('id', id)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContents editable={true} handleDelete={handleDelete} />
      </form>
    </FormProvider>
  )
}
