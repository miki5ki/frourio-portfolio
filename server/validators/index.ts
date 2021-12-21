import { MinLength } from 'class-validator'

export class LoginBody {
  @MinLength(2)
  id: string

  @MinLength(4)
  pass: string
}

export class TopicBody {
  title: string
  message: string
  tag: string
  like: number
  userName: string
  userId: number
  createdAt: string
}
