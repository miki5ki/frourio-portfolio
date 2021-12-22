import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import type { UserInfo } from '$/types'

const { persistAtom } = recoilPersist()

export const userInfoState = atom({
  key: 'UserCredential',
  default: {} as UserInfo,
  effects_UNSTABLE: [persistAtom]
})
