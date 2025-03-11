import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

prisma.user.create({
  data: {
    name: 'Rian Guedes',
    email: 'rianguedes.rd@gmail.com',
  },
})

export const app = fastify()
