import { Pokemon } from "../pokemon.types";

interface PokemonListProps extends React.HTMLAttributes<HTMLDivElement> {
    pokemon?: Pokemon[];
    loading: boolean;
}

export type {
    PokemonListProps
}