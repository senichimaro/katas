import React, { useState } from 'react'
import { createProducts } from '../services/services'

import Nav from './Nav'
import Form from './Form'
import Modal from './Modal'

const FormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const handleSubmit = async data => {
    event.preventDefault()
    // console.log("handleSubmit", data);

    const response = await createProducts(data)

    // handleModal()
    setIsModalOpen(response)
  }


  return (
    <>
      <Nav />
      <Form handleSubmit={handleSubmit} />
      <Modal isModalOpen={isModalOpen} handleModal={handleModal} />
    </>
  )
}

export default FormPage
