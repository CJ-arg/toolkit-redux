import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

//pokeapi.co/api/v2/pokemon?limit=10&offset=0
export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    // todo peticion htt
    // const resp = await fetch(
    // `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    // )
    // const data = await resp.json();
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
