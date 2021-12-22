import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ProfileContents } from '~/components/molecules/ProfileContents'
import { TopicsTable } from '~/components/molecules/TopicsTable'
import { useRecoilValue } from 'recoil'
import { userInfoState } from '~/atoms/userIdState'
import { useRouter } from 'next/router'

export const UserProfile = () => {
  const userInfo = useRecoilValue(userInfoState)
  const router = useRouter()
  console.log(userInfo.id)

  if (userInfo && !userInfo.id) {
    router.push('/login')
  }

  return (
    <>
      (
      <Flex display="row">
        <ProfileContents />
        <TopicsTable />
      </Flex>
      )
    </>
  )
}
