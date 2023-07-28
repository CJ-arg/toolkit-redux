import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'


const PokemonApp = () => {
  const dispatch = useDispatch()
  const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons(0));
  }, [])

  return (
    <>
      <h1>PokemonApp</h1>

      <hr />
      <span>Loading: {isLoading ? 'true' : 'false'}</span>
      <ul>
        {pokemons.map(({ name }) => (<li key={name}> {name}</li>))}
      </ul>
      <button disabled={!isLoading} onClick={() => dispatch(getPokemons(page + 1))}>PAGE</button>
    </>

  )
}

export default PokemonApp