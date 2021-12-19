import React from 'react'
import { ProfileContents } from '~/components/molecules/ProfileContents'
import { TopicsTable } from '~/components/molecules/TopicsTable'

export const UserProfile = () => {
  return (
    <>
      <ProfileContents />
      <TopicsTable title="私の記事一覧" />
    </>
  )
}
