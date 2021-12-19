import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Topic } from '~/types/type'
import { InputContents } from '../../molecules/InputContents'

export const TopicCreate = () => {
  const methods = useForm()

  const onSubmit = (data: Topic) => {
    console.log(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContents />
      </form>
    </FormProvider>
  )
}
