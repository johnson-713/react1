/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect, useState } from "react"
import { Component2 } from "./Component2"

function Component({text}) {
    const [count, setCount] = useState(0)
    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        if(text === "Hello all!!!"){
            setBoolean(true)
        }
    }, [text])
  return (
    <>
    <h1>component 1</h1>
    {
        boolean ? <Component2 text={text} count={count} /> : <p>Boolean is false</p>
    }
    <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default Component