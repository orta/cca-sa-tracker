import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const ClientForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.client?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.client?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="trainerName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Trainer name
        </Label>
        <TextField
          name="trainerName"
          defaultValue={props.client?.trainerName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="trainerName" className="rw-field-error" />

        <Label
          name="livesIn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lives in
        </Label>
        <TextField
          name="livesIn"
          defaultValue={props.client?.livesIn ?? 'apartment'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="livesIn" className="rw-field-error" />

        <Label
          name="numberOfGuardians"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number of guardians
        </Label>
        <NumberField
          name="numberOfGuardians"
          defaultValue={props.client?.numberOfGuardians ?? 2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="numberOfGuardians" className="rw-field-error" />

        <Label
          name="hasAHallway"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has a hallway
        </Label>
        <CheckboxField
          name="hasAHallway"
          defaultChecked={props.client?.hasAHallway ?? true}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hasAHallway" className="rw-field-error" />

        <Label
          name="hasAnElevator"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has an elevator
        </Label>
        <CheckboxField
          name="hasAnElevator"
          defaultChecked={props.client?.hasAnElevator ?? false}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hasAnElevator" className="rw-field-error" />

        <Label
          name="hasAnOuterDoor"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has an outer door
        </Label>
        <CheckboxField
          name="hasAnOuterDoor"
          defaultChecked={props.client?.hasAnOuterDoor ?? false}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hasAnOuterDoor" className="rw-field-error" />

        <Label
          name="hasACar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has a car
        </Label>
        <CheckboxField
          name="hasACar"
          defaultChecked={props.client?.hasACar ?? false}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="hasACar" className="rw-field-error" />

        <Label
          name="exitDoorName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Exit door name
        </Label>
        <TextField
          name="exitDoorName"
          defaultValue={props.client?.exitDoorName ?? 'front'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="exitDoorName" className="rw-field-error" />

        <Label
          name="preferredTimeOfDay"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Preferred time of day
        </Label>
        <TextField
          name="preferredTimeOfDay"
          defaultValue={props.client?.preferredTimeOfDay ?? 'evening'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="preferredTimeOfDay" className="rw-field-error" />

        <Label
          name="pdqsJSON"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          PDQs as comma separated
        </Label>
        <TextField
          name="pdqsJSON"
          defaultValue={props.client?.pdqsJSON ?? 'shoes'}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="pdqsJSON" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClientForm
