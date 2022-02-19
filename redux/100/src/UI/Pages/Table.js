// import React from 'react';
import { useQuery } from 'react-query'

// import components
import TableEl from '../components/TableEl'

// back-end controllers
import { requestPosts } from '../controllers/controllers'



const Table = () => {

  const { isLoading, isError, data } = useQuery('initialRequest', () => requestPosts() )


  return (
    <>
      {
        isLoading
        ? 'Loading...'
        : isError ? 'Error has occur'
        : <TableEl data={ data.data }/>
      }
    </>
  )
}

export default Table;
