import { defineController } from './$relay'
import { getTopics, createTopic } from '$/service/topics'

const print = (text: string) => console.log(text)

export default defineController(
  { getTopics, print },
  ({ getTopics, print }) => ({
    get: async ({ query }) => {
      if (query?.message) print(query.message)

      return { status: 200, body: await getTopics(query?.limit) }
    },
    post: async ({ body }) => ({
      status: 201,
      body: await createTopic(body)
    })
  })
)
