import type { ReactElement } from 'react'
import { UserProfile } from '~/components/organisms/topics/UserProfile'
import { MainLayout } from '~/components/layouts/MainLayout'
const edit = () => {
  return <UserProfile />
}

export default edit

edit.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>
