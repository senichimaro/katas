import React from 'react'
import { useParams } from 'react-router-dom'


/** Routes Configuration : Final
*/
//  Final level:
// Just display params value

export default function Child(){
  let { child } = useParams();
  console.log("child", child);

  return <h3>{child}</h3>
}
