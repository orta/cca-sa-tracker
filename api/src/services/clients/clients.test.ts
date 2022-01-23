import {
  clients,
  client,
  createClient,
  updateClient,
  deleteClient,
} from './clients'
import type { StandardScenario } from './clients.scenarios'

describe('clients', () => {
  scenario('returns all clients', async (scenario: StandardScenario) => {
    const result = await clients()

    expect(result.length).toEqual(Object.keys(scenario.client).length)
  })

  scenario('returns a single client', async (scenario: StandardScenario) => {
    const result = await client({ id: scenario.client.one.id })

    expect(result).toEqual(scenario.client.one)
  })

  scenario('creates a client', async () => {
    const result = await createClient({
      input: { name: 'String', trainerName: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.trainerName).toEqual('String')
  })

  scenario('updates a client', async (scenario: StandardScenario) => {
    const original = await client({ id: scenario.client.one.id })
    const result = await updateClient({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a client', async (scenario: StandardScenario) => {
    const original = await deleteClient({ id: scenario.client.one.id })
    const result = await client({ id: original.id })

    expect(result).toEqual(null)
  })
})
