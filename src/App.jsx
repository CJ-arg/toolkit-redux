import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counter'
import React from 'react'


const App = () => {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>


      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>

      </div>

    </>
  )
}

export default App