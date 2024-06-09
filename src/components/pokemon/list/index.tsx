import { forwardRef } from "react";
import css from "./pokemonList.module.css";
import { PokemonListProps } from "./pokemonList.types";
import { Pokemon } from "../pokemon.types";
import { Image } from "../../image";
import Placeholder from "../../../assets/placeholder_small.png";
import { Link } from "react-router-dom";

const PokemonList = forwardRef<HTMLDivElement, PokemonListProps>(
    (
        { pokemon, loading, ...props },
        ref
    ) => {

		if(!pokemon || pokemon.length < 1) {
			return (
				<div className={`${css.pokemon_list__error} ${loading ? css.loading : ''}`} ref={ref} {...props}>
					<p>Error! Something went wrong, try refreshing the page...</p>
				</div>
			)
		}

        return (
            <div className={`${css.pokemon_list__container} ${loading ? css.loading : ''}`} ref={ref} {...props}>
				{pokemon?.map((item: Pokemon) => {

					const id = item.url.substring(42, item.url.length).replace("/", "");
					const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

					return (
						<Link to={`/pokemon/${item.name}`} className={css.link} key={item.name}>
							{loading ?
								<>
									<Image src={Placeholder} alt={item.name} placeholder={Placeholder}/>
									<div className={css.loading_name}></div>
								</>
								:
								<>
									<Image src={IMG_URL} alt={item.name} placeholder={Placeholder} />
									<p>{item.name.replace("-", " ")}</p>
								</>
							}
						</Link>
					);
				})}
			</div>
        )
    }
)

export { PokemonList }