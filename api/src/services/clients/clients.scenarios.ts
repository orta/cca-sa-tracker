import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ClientCreateArgs>({
  client: {
    one: { data: { name: 'String', trainerName: 'String' } },
    two: { data: { name: 'String', trainerName: 'String' } },
  },
})

export type StandardScenario = typeof standard
