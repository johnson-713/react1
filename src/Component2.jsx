/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext } from "react"
import { AppContext } from "./App"


export const Component2 = ({count}) => {
  const {title, isCountAbove5} = useContext(AppContext)

  console.log('title', title, isCountAbove5)
  return (
    <div>Component2 <h3>{title} {count}</h3></div>
  )
}
