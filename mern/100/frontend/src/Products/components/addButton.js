import React from 'react'
import { Container, Section, Button } from 'react-bulma-components'

const addButton = ({ onClick }) => {
  return (
    <Section>
      <Container>
        <div className="is-pulled-right">
          <Button onClick={onClick} color="primary">Add</Button>
        </div>
      </Container>
    </Section>
  )
}

export default addButton
