import Image from "next/image";
import { Pokemons, SimplePokemon } from "./interfaces";
import PokemonItem from "@/app/components/pokemons/PokemonItem";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[] | undefined> => {
  try {
    const data: Pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());
    const pokemons = data.results.map((pokemon) => ({
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    }));

    // throw Error("Esto es un error"); // Error 500
    // thow notFound(); // Error 404

    return pokemons;
  } catch (error) {}
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        <small>static</small> Pokemon List
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons &&
          pokemons.map((pokemon) => (
            <PokemonItem
              id={pokemon.id}
              name={pokemon.name}
              url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
          ))}
      </div>
    </div>
  );
}
