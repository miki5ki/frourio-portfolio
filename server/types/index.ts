export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export type Topic = {
  id: string
  title: string
  message: string
  tag: string
  like: number
  userName: string
  userId: number
  createdAt: string
}
