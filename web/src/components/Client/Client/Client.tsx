import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useState } from 'react'

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`

const Client = ({ client }) => {
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
            to={routes.editClient({ id: client.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(client.id)}
          >
            Delete
          </button>
        </div>
      </nav>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Client {client.name} step generator for {client.trainerName}
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

export default Client
