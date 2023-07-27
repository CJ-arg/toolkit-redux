import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//pokeapi.co/api/v2/pokemon?limit=10&offset=0
export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    // todo peticion htt

    // dispatch(setPokemons)
  };
};
