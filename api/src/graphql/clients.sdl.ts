export const schema = gql`
  type Client {
    createdAt: DateTime!
    updatedAt: DateTime!
    id: Int!
    name: String!
    trainerName: String!
    livesIn: String!
    numberOfGuardians: Int!
    hasAHallway: Boolean!
    hasAnElevator: Boolean!
    hasAnOuterDoor: Boolean!
    hasACar: Boolean!
    exitDoorName: String!
    preferredTimeOfDay: String!
    pdqsJSON: String!
  }

  type Query {
    clients: [Client!]! @requireAuth
    client(id: Int!): Client @requireAuth
  }

  input CreateClientInput {
    name: String!
    trainerName: String!
    livesIn: String!
    numberOfGuardians: Int!
    hasAHallway: Boolean!
    hasAnElevator: Boolean!
    hasAnOuterDoor: Boolean!
    hasACar: Boolean!
    exitDoorName: String!
    preferredTimeOfDay: String!
    pdqsJSON: String!
  }

  input UpdateClientInput {
    name: String
    trainerName: String
    livesIn: String
    numberOfGuardians: Int
    hasAHallway: Boolean
    hasAnElevator: Boolean
    hasAnOuterDoor: Boolean
    hasACar: Boolean
    exitDoorName: String
    preferredTimeOfDay: String
    pdqsJSON: String
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client! @requireAuth
    updateClient(id: Int!, input: UpdateClientInput!): Client! @requireAuth
    deleteClient(id: Int!): Client! @requireAuth
  }
`
