import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { Topic, Prisma } from '$prisma/client'
const prisma = new PrismaClient()

export const findTopic = (id: Topic['id']) =>
  prisma.topic.findFirst({ where: { id } })

export const getTopics = depend(
  { prisma: prisma as { topic: { findMany(): Promise<Topic[]> } } },
  async ({ prisma }, limit?: number) =>
    (await prisma.topic.findMany()).slice(0, limit)
)

export const createTopic = (
  body: Pick<
    Topic,
    'message' | 'title' | 'createdAt' | 'userName' | 'tag' | 'like' | 'userId'
  >
) => prisma.topic.create({ data: { ...body } })

export const updateTopic = (
  id: Topic['id'],
  partialTopic: Prisma.TopicUpdateInput
) => prisma.topic.update({ where: { id }, data: partialTopic })
