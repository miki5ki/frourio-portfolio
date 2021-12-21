import type { Topic } from '$prisma/client'
import { TopicBody } from '$/validators'
export type Methods = {
  get: {
    query?: {
      limit?: number
      message?: string
    }
  }
  post: {
    reqBody: TopicBody
    resBody: Topic
  }
}
