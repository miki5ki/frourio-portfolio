import type { ReactElement } from 'react'
import { TopicView } from '~/components/organisms/topics/TopicView'
import { MainLayout } from '~/components/layouts/MainLayout'
const topic = () => {
  return <TopicView />
}

export default topic

topic.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
