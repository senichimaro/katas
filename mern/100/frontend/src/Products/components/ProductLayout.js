import React, { useState, useEffect } from 'react'

import Header from './Header'
import AddButton from './addButton'
import ListProducts from './ListProducts'
import { ModalPopup } from './Modal'
import Loading from './Loading'

import { Container } from 'react-bulma-components'

import { saveProduct, getProducts } from '../services'

const ProductLayout = () => {

  const [isModalOpen, setIsModelOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  async function loadProducts(){
    const response = await getProducts()

    if( response.status === 200){
      setProducts(response.data.products)
      setIsLoading(false)
    }
  }

  useEffect( () => {
    // loadProducts()
  }, [])

  const handleSubmit = async data => {
    await saveProduct(data)
    loadProducts()
    setIsModelOpen(false)
  }

  return (
    <Container>
      <Header title={"Products App"} />
      <AddButton onClick={() => setIsModelOpen(true)} />
      {
        isLoading && <Loading />
      }
      {
        !isLoading && !products.length && (
          <h2 className="title has-text-centered">
          You don't have products
          </h2>
        )
      }
      {
        !isLoading && products.length && <ListProducts products={products} />
      }
      <ModalPopup
        isModalOpen={isModalOpen}
        setIsModelOpen={setIsModelOpen}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default ProductLayout
