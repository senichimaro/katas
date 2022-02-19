import React from 'react'
import { Modal } from 'react-bulma-components'
import { Form } from './Form'

export const ModalPopup = ({ isModalOpen, setIsModelOpen, handleSubmit }) => {
  return (
    <Modal show={isModalOpen} onClose={() => setIsModelOpen(false)} >
      <Modal.Card>

        <Modal.Card.Header showClose={false} >
          <Modal.Card.Title>
            Add Product
          </Modal.Card.Title>
        </Modal.Card.Header>

        <Modal.Card.Body>
          <Form handleSubmit={handleSubmit}/>
        </Modal.Card.Body>

      </Modal.Card>
    </Modal>
  )
}
