import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'


const PokemonApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons(0));

  }, [])

  return (
    <>
      <h1>PokemonApp</h1>

      <hr />
      <ul>
        <li>H</li>
        <li>O</li>
        <li>L</li>
        <li>A</li>
        <li>M</li>

      </ul>
    </>

  )
}

export default PokemonApp