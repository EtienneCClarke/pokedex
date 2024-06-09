import { useEffect, useState } from "react";
import { usePagination } from "../../hooks/pagination";
import { NextButton, PreviousButton } from "../../components/pagination";
import { sleep } from "../../utils/sleep";
import { Settings } from "../../components/settings";
import PokeBall from "../../assets/pokeball.png";
import css from "./root.module.css";
import { Pokemon } from "../../components/pokemon/pokemon.types";
import { PokemonList } from "../../components/pokemon/list";

interface PokemonApiResponse {
	count: number;
	next: string;
	previous: string | null;
	results: Pokemon[]
}

const Root = () => {

	const POKEMON_API_URL = import.meta.env.VITE_POKEMON_API;
	const RATE_LIMIT = 200; // 1 request per X ms

	const { itemsPerPage, currentPageIndex, setTotalItemCount, maxPageIndex } = usePagination();
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [loading, isLoading] = useState<boolean>(false);
	const [lastFetch, setLastFetch] = useState<number>(0);

	const getPokemon = async () => {

		// Handle rate limit
		isLoading(true);
		if(Date.now() - lastFetch < RATE_LIMIT) {
			await sleep(Date.now() - lastFetch);
		}

		// Fetch pokemon
		fetch(
			POKEMON_API_URL + `pokemon-species/?limit=${itemsPerPage}&offset=${itemsPerPage*(currentPageIndex - 1)}`
		).then((res) => {
			return res.json();
		}).then((json: PokemonApiResponse) => {
			setTotalItemCount(json.count);
			setPokemon(json.results);
			setLastFetch(Date.now())
			isLoading(false);
		});
	}

	useEffect(() => {
		getPokemon();
	}, [currentPageIndex])

	return (
		<div className="container">
			<Settings />
			<div className={css.header}>
				<div className={css.logo}>
					<h1>Pokedex</h1>
					<img src={PokeBall} alt="pokeball" />
				</div>
				<div className={css.pagination__controls}>
					<PreviousButton disabled={loading} />
					{`${currentPageIndex} / ${maxPageIndex}`}
					<NextButton disabled={loading} />
				</div>
			</div>
			<PokemonList pokemon={pokemon} loading={loading} />
		</div>
	)
}

export { Root }