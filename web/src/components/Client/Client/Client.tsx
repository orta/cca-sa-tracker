import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useState } from 'react'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
// import Client from 'src/components/Client/Client'
import { FindClientById } from 'types/graphql'

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`

const ClientView = (props: CellSuccessProps<FindClientById>) => {
  console.log({ props })
  const clientToLookAt = props.clientToLookAt
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      toast.success('Client deleted')
      navigate(routes.clients())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete client ' + id + '?')) {
      deleteClient({ variables: { id } })
    }
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const randLength = randomIntFromInterval(8, 12)

  const generateSteps = (count: number) => {
    const steps: { jsx: () => JSX.Element }[] = []

    const first = {
      jsx: () => (
        <>Standup, put your shoes on (and keep them on), sit back down </>
      ),
    }

    const last = {
      jsx: () => (
        <>
          Walk to the front door, open it, step through , close it behind you
          wait <strong>10 seconds</strong>, come back inside and sit down{' '}
        </>
      ),
    }

    steps.push(first)

    while (steps.length < count) {
      const example = { jsx: () => <></> }
      const potentails = [
        () => <>Stand up, sit back down.</>,
        () => <>Walk to the {clientToLookAt.exitDoorName}, sit back down.</>,
        () => (
          <>Go halfway to the {clientToLookAt.exitDoorName}, sit back down.</>
        ),
        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and touch the handle, sit
            back down.
          </>
        ),
        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door,{' '}
            <strong>do not walk through it</strong>, close the door, sit back
            down.
          </>
        ),
        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door, take one
            step bold, <strong>do not close it behind you</strong>, sit back
            down.
          </>
        ),
        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door, close it
            behind you, wait <strong>X seconds</strong>, sit back down.
          </>
        ),

        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door,
            <strong>
              step through, close the door half-way from outside
            </strong>{' '}
            come back inside, sit back down.
          </>
        ),

        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door,
            <strong>
              step through, close the door half-way from outside
            </strong>{' '}
            come back inside, sit back down.
          </>
        ),

        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door,
            <strong>do not walk through</strong> wait X seconds, close it, sit
            back down.
          </>
        ),
        () => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door, step
            through, take <strong>X steps</strong> through, close it, sit back
            down.
          </>
        ),
      ]

      if (clientToLookAt.hasAnElevator) {
        potentails.push(() => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door, step
            through, walk halfway to the elevator, go back, sit back down.
          </>
        ))
        potentails.push(() => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door, step
            through, walk to the elevator, go back, sit back down.
          </>
        ))

        potentails.push(() => (
          <>
            Go to the {clientToLookAt.exitDoorName} and open the door, step
            through, walk to the elevator <strong>and call it</strong>, go back,
            sit back down.
          </>
        ))
      }

      if (clientToLookAt.hasACar) {
        potentails.push(() => (
          <>Walk to the car, unlock, go back, sit back down.</>
        ))

        potentails.push(() => (
          <>
            Walk to the car, unlock and open the car door, go back, sit back
            down.
          </>
        ))

        potentails.push(() => (
          <>
            Walk to the car, unlock and open the car door wait{' '}
            <strong>X seconds</strong>, go back, sit back down.
          </>
        ))

        potentails.push(() => (
          <>
            Walk to the car, turn on engine, <strong>X seconds</strong>, go
            back, sit back down.
          </>
        ))
      }

      if (clientToLookAt.hasGarageDoor) {
        potentails.push(() => <>Open garage door, come back and sit down</>)
        potentails.push(() => (
          <>
            Open garage door and close it, wait 5 seconds, come back and sit
            down
          </>
        ))
      }

      const putThingOnOrPickUp = (str: string) => {
        switch (str) {
          case 'coat':
            return 'put on coat'
          case 'keys':
            return 'pick up keys'
          default:
            return `get your ${str}`
        }
      }

      const takeOffThingOrDrop = (str: string) => {
        switch (str) {
          case 'coat':
            return 'take off coat'
          case 'keys':
            return 'put down keys'
          default:
            return `put down your ${str}`
        }
      }

      const pdqs = clientToLookAt.pdqsJSON
        .split(',')
        .map((t) => t.trim().toLowerCase())
      for (let i = 0; i < pdqs.length; i++) {
        const pdq = pdqs[i]
        potentails.push(() => (
          <>
            Get up, {putThingOnOrPickUp(pdq)}, {takeOffThingOrDrop(pdq)}, sit
            back down
          </>
        ))
        potentails.push(() => (
          <>Get up, {putThingOnOrPickUp(pdq)}, sit back down</>
        ))
      }

      if (pdqs.length > 1) {
        const one = randomIntFromInterval(0, pdqs.length)
        const two = randomIntFromInterval(0, pdqs.length)
        if (one != two) {
          potentails.push(() => (
            <>
              Get up, {putThingOnOrPickUp(pdqs[one])},{' '}
              {putThingOnOrPickUp(pdqs[two])} sit back down
            </>
          ))
          potentails.push(() => (
            <>
              Get up, {putThingOnOrPickUp(pdqs[one])},{' '}
              {putThingOnOrPickUp(pdqs[two])}, {takeOffThingOrDrop(pdqs[two])}.{' '}
              {takeOffThingOrDrop(pdqs[one])} sit back down
            </>
          ))
        }
      }

      // let hasAGarageDoor =
      const randI = randomIntFromInterval(0, potentails.length - 1)
      steps.push({ jsx: potentails[randI] })

      steps.push(example)
    }

    steps.push(last)
    return steps
  }

  const [steps, setSteps] = useState(generateSteps(randLength))

  return (
    <>
      <nav>
        <div style={{ float: 'right' }}>
          <Link
            to={routes.editClient({ id: clientToLookAt.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(clientToLookAt.id)}
          >
            Delete
          </button>
        </div>
      </nav>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Client {clientToLookAt.name} step generator for{' '}
            {clientToLookAt.trainerName}
          </h2>
        </header>

        <button
          type="button"
          className="rw-button"
          onClick={() => setSteps(generateSteps(randLength))}
        >
          Re-generate
        </button>

        <ul>
          {steps.map((s, i) => (
            <li key={i}>{s.jsx()}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ClientView
