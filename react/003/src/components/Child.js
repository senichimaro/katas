import React,{ Fragment } from 'react'
import { useParams } from 'react-router-dom'

export default function Child(){
  const { child } = useParams();
  return ( <h4>{child}</h4> )
}
