import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Topic } from '~/server/types'
import { apiClient } from '~/utils/apiClient'
import useAspidaSWR from '@aspida/swr'
import { useRouter } from 'next/router'
import { InputContents } from '../../molecules/InputContents'
import { Spinner } from '@chakra-ui/react'

export const TopicEdit = () => {
  const router = useRouter()
  const id = router.query.id as string
  const {
    data: topic,
    error,
    revalidate
  } = useAspidaSWR(apiClient.topics._topicId(id))

  const methods = useForm()
  console.log(topic)

  const onSubmit = (data: Topic) => {
    console.log(data)
  }

  if (!topic) return <Spinner />

  methods.setValue('title', topic.title)
  methods.setValue('message', topic.message)
  methods.setValue('tag', topic.tag)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContents editable={true} />
      </form>
    </FormProvider>
  )
}
