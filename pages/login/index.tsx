import type { ReactElement } from 'react'
import { Authentication } from '~/components/organisms/Authentication'
import { LoginLayout } from '~/components/layouts/LoginLayout'

const login = () => {
  return (
    <>
      <Authentication />
    </>
  )
}

export default login

login.getLayout = (page: ReactElement) => <LoginLayout>{page}</LoginLayout>
