/* eslint-disable react/prop-types */
import React from 'react'

export const Box = ({children}) => {
  return (
    <div className="box">
        <div className="box-in">
          {children}
        </div>
      </div>
  )
}
