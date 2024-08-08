import Image from "next/image";
import { Pokemons, SimplePokemon } from "./interfaces";
import PokemonItem from "@/app/components/PokemonItem";

export const metadata = {
  title: "Favorites",
  description: "Favorite Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Favorite Pokemons</span>{" "}
      <small>Global State</small>
      <div className="flex flex-wrap gap-10 items-center justify-center"></div>
    </div>
  );
}
