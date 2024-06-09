import { forwardRef } from "react";
import { AbilityProps, Effect } from "./abilities.types";
import css from "./abilities.module.css";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "../../../hooks/language";

const Ability = forwardRef<HTMLDivElement, AbilityProps>(
    (
        { name, url, ApiError, className, ...props },
        ref
    ) => {
        const { language, setLanguage } = useLanguage();

        const { isLoading, error, data } = useQuery({
            queryKey: [name],
            queryFn: () => fetch(
                import.meta.env.VITE_POKEMON_API + `ability/${name}`
            ).then((res) => {
                return res.json()
            })
        });

        const { isLoading: loading, data: yoda, error: yodaError } = useQuery({
            queryKey: [`${name}_yoda`],
            queryFn: () => fetch(
                import.meta.env.VITE_YODA_API + "?text=" + data.effect_entries.filter((entry:Effect) => entry.language.name == "en")[0].effect
            ).then((res) => {
                if(res.status == 429) {
                    setLanguage("eng");
                    ApiError(true);
                    return null;
                } else {
                    return res.json()
                }
            }).then((json) => {
                return json;
            }),
            enabled: !!data && language === "yoda"
        })
        
        return (
            <div className={className ? className : css.ability} {...props} ref={ref}>
                {isLoading &&
                    <div className={css.loading__wrapper}>
                        <div className={css.loading_title} />
                        <div className={css.loading_effect} />
                    </div>
                }
                {!isLoading && !loading && !error &&
                    <>
                        <h3 className={css.name}>{name.replace("-", " ")}</h3>
                        {language == "eng" && data.effect_entries.map((entry: Effect, index: number) => {
                            if(entry.language.name === "en") {
                                return (
                                    <p className={css.effect} key={index}>{entry.effect}</p>
                                )
                            }
                        })}
                        {language == "yoda" && !yodaError &&
                            <p className={css.effect}>{yoda?.contents?.translated}</p>
                        }
                    </>
                }
            </div>
        )
    }
)

export { Ability }