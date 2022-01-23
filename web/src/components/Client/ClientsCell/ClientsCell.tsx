import type { FindClients } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Clients from 'src/components/Client/Clients'

export const QUERY = gql`
  query FindClients {
    clients {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No clients yet. '}
      <Link
        to={routes.newClient()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ clients }: CellSuccessProps<FindClients>) => {
  return <Clients clients={clients} />
}
