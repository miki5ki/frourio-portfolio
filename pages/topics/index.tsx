import type { ReactElement } from 'react'
import { TopicsTable } from '../../components/molecules/TopicsTable'
import { MainLayout } from '~/components/layouts/MainLayout'
const topics = () => {
  return (
    <>
      <TopicsTable />
    </>
  )
}

export default topics

topics.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
