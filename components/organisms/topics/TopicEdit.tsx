import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Topic } from '~/types/type'
import { InputContents } from '../../molecules/InputContents'

export const TopicEdit = () => {
  const methods = useForm()

  const onSubmit = (data: Topic) => {
    console.log(data)
  }

  methods.setValue('title', 'はじめてMiita記事を書いてみた')
  methods.setValue(
    'contents',
    'こんにちは。はじめてMitta記事を書きます。今日はreact-hook-formについて解説してみたいと思います。'
  )
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputContents />
      </form>
    </FormProvider>
  )
}
