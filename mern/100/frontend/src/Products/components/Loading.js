import React from 'react'
import { Container, Section, Loader } from 'react-bulma-components'

const Loading = () => {
  return (
    <Section>
      <Container>
        <div className="columns is-centered">
          <Loader style={{
            width:100,
            height:100,
          }}/>
        </div>
      </Container>
    </Section>
  )
}

export default Loading
