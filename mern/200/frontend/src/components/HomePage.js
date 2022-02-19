import React, { useState, useEffect } from 'react'
import { getProducts } from '../services/services'

import List from './List'
import Loading from './Loading'
import NoProducts from './NoProducts'


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])


  async function loadProducts(){
    const response = await getProducts()
    setIsLoading(false)
    setProducts(response.data)
  }

  useEffect(() => {
    loadProducts()
  },[isLoading])


  if( !isLoading && products.length ) return <List products={products}/>

  if( !isLoading && !products.length ) return <NoProducts />

  return <Loading />

}

export default HomePage
