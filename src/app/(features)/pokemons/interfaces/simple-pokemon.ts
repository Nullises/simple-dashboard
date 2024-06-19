export interface SimplePokemon {
  id: string;
  name: string;
  url?: string;
}

export interface FullPokemon {
  id: string;
  name: string;
  type: string;
  power: string;
  url: string;
}
