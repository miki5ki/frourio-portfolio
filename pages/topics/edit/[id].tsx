import type { ReactElement } from 'react'
import { TopicEdit } from '~/components/organisms/topics/TopicEdit'
import { MainLayout } from '~/components/layouts/MainLayout'

const topic = () => {
  return <TopicEdit />
}

export default topic

topic.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
