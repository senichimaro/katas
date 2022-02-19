import React, { useState, useRef } from 'react'
import { Form as BulmaForm } from 'react-bulma-components'
import { Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

export const Form = ({ handleSubmit }) => {

  const [formValues, setFormValues] = useState({
    name:"",
    priceUnitary:"",
    size:"",
    description:""
  })

  const inputFileRef = useRef()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({...formValues, [name]:value})
  }

  // local function (_)
  const _handleSubmit = event => {
    event.preventDefault()
    // image is the field name that router is waiting for
    handleSubmit({...formValues, image:inputFileRef.current.files[0]})
  }

  return (
    <form onSubmit={_handleSubmit}>
      <Field>
        <Label>
          Name
        </Label>
        <Control>
          <Input
            placeholder="Product Name..."
            type="text"
            name="name"
            onChange={handleChange}
            value={formValues.name}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Size
        </Label>
        <Control>
          <Input
            placeholder="Product Size..."
            type="number"
            name="price"
            onChange={handleChange}
            value={formValues.price}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Price Unitary
        </Label>
        <Control>
          <Input
            placeholder="Product Price..."
            type="number"
            name="unitaryPrice"
            onChange={handleChange}
            value={formValues.unitaryPrice}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Description
        </Label>
        <Control>
          <Input
            placeholder="Product Description..."
            type="text"
            name="description"
            onChange={handleChange}
            value={formValues.description}
          />
        </Control>
      </Field>

      <Field>
        <Label>
          Image
        </Label>
        <Control>
          <input type="file" ref={inputFileRef}/>
        </Control>
      </Field>

      <Button type="submit" color="primary">Save</Button>

    </form>
  )
}
