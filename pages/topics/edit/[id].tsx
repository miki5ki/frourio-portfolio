import type { ReactElement } from 'react'
import { TopicEdit } from '~/components/organisms/topics/TopicEdit'
import { MainLayout } from '~/components/layouts/MainLayout'
import { useRouter } from 'next/router'
const topic = () => {
  return <TopicEdit />
}
export default topic

topic.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
