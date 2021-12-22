import type { ReactElement } from 'react'
import { MainLayout } from '~/components/layouts/MainLayout'
import { TopicCreate } from '~/components/organisms/topics/TopicCreate'
const create = () => {
  return (
    <>
      <TopicCreate />
    </>
  )
}

export default create

create.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
