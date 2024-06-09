import { useParams } from "react-router-dom";
import { BackButton } from "../../components/backButton";
import { useQuery } from "@tanstack/react-query";
import { Images } from "../../components/pokemon/sprites";
import { Stats } from "../../components/pokemon/stats";
import { Abilities } from "../../components/pokemon/abilities";
import { Items } from "../../components/pokemon/items";
import { Cries } from "../../components/pokemon/cries";
import Spinner from "../../assets/spinner.png";
import css from "./pokemon.module.css";

const Pokemon = () => {

    const { pokemonName } = useParams();

    const { isLoading, error, data } = useQuery({ queryKey: [pokemonName], queryFn: () =>
        fetch(
            import.meta.env.VITE_POKEMON_API + `pokemon/${pokemonName}`
        ).then((res) => res.json())
    });
    
    return (
        <div className="container">
            <div className={css.header}>
                <BackButton />
                <h1 className={css.title}>{pokemonName?.replace("-", " ")}</h1>
                {!isLoading && !error ? <p className={css.id}>#{data.id}</p> : <></>}
            </div>
            {isLoading &&
                <div className={css.loading}>
                    <img src={Spinner} alt="loading..." />
                </div>
            }
            {!isLoading && !error &&
                <div className={css.pokemon_view__grid}>
                    <div className={css.content_wrapper}>
                        <Images sprites={data.sprites} name={data.name} />
                    </div>
                    <div className={css.content_wrapper}>
                        <Stats stats={data.stats} />
                        <Abilities abilities={data.abilities} />
                        <Items items={data.held_items} />
                        <Cries cries={data.cries} />
                    </div>
                </div>
            }
            {!isLoading && error && 
                <div className={css.loading}>
                    <h3>Uh oh! Something went wrong! Try reloading the page</h3>
                </div>
            }
        </div>
    )
}

export { Pokemon };