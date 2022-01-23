import type { FindClientById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Client from 'src/components/Client/Client'

export const QUERY = gql`
  query FindClientById($id: Int!) {
    clientToLookAt: client(id: $id) {
      createdAt
      updatedAt
      id
      name
      trainerName
      livesIn
      numberOfGuardians
      hasAHallway
      hasAnElevator
      hasAnOuterDoor
      hasACar
      exitDoorName
      preferredTimeOfDay
      pdqsJSON
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Client not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  clientToLookAt,
}: CellSuccessProps<FindClientById>) => {
  return <Client client={clientToLookAt} />
}
