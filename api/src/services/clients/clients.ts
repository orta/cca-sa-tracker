import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const clients = () => {
  return db.client.findMany()
}

export const client = ({ id }: Prisma.ClientWhereUniqueInput) => {
  return db.client.findUnique({
    where: { id },
  })
}

interface CreateClientArgs {
  input: Prisma.ClientCreateInput
}

export const createClient = ({ input }: CreateClientArgs) => {
  return db.client.create({
    data: input,
  })
}

interface UpdateClientArgs extends Prisma.ClientWhereUniqueInput {
  input: Prisma.ClientUpdateInput
}

export const updateClient = ({ id, input }: UpdateClientArgs) => {
  return db.client.update({
    data: input,
    where: { id },
  })
}

export const deleteClient = ({ id }: Prisma.ClientWhereUniqueInput) => {
  return db.client.delete({
    where: { id },
  })
}
