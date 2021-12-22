import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ProfileContents } from '~/components/molecules/ProfileContents'
import { TopicsTable } from '~/components/molecules/TopicsTable'

export const UserProfile = () => {
  return (
    <>
      <Flex display="row">
        <ProfileContents />
        <TopicsTable />
      </Flex>
    </>
  )
}
