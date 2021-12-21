import React from 'react'
import type { ReactElement } from 'react'
import { TopicsTable } from '../../components/molecules/TopicsTable'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Layout } from '~/components/layouts/Layout'
import { Sidebar } from '~/components/molecules/Sidebar'
import { Header } from '~/components/molecules/Header'

const topics = () => {
  return (
    <>
      <TopicsTable />
    </>
  )
}

export default topics

topics.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        {page}
      </Flex>
    </>
  )
}
