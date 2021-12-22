import { defineController } from './$relay'
import { findTopic, updateTopic, deleteTopic } from '$/service/topics'

export default defineController(() => ({
  get: async ({ params }) => {
    const task = await findTopic(params.topicId)

    return task ? { status: 200, body: task } : { status: 404 }
  },
  patch: async ({ body, params }) => {
    await updateTopic(params.topicId, body)
    return { status: 204 }
  },
  delete: async ({ params }) => {
    await deleteTopic(params.topicId)
    return { status: 204 }
  }
}))
