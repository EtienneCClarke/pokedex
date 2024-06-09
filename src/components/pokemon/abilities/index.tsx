import { forwardRef, useState } from "react";
import { AbilitiesProps } from "./abilities.types";
import { Ability } from "./ability";
import css from "./abilities.module.css";

const Abilities = forwardRef<HTMLDivElement, AbilitiesProps>(
    (
        { abilities, ...props },
        ref
    ) => {

        const [translationError, setTranslationError] = useState<boolean>(false);

        if(abilities?.length == 0) { return <></>; }

        return (
            <div {...props} ref={ref}>
                <h2 className={css.title}>Abilities</h2>
                <div className={css.abilities__container}>
                {translationError &&
                    <p className={css.error}>
                        <strong>Yoda API limit reached! </strong>
                        Unfortunately, the Yoda translation API is free but has limited usage. Come back later
                        for more Yoda, in the meantime, we have automatically switched your
                        language back to <span className={css.underline}>English</span> for you :)
                    </p>
                }
                    {abilities?.map((ability, key) => {
                        return (
                            <Ability name={ability.ability.name} url={ability.ability.url} key={key} ApiError={setTranslationError}/>
                        )
                    })}
                </div>
            </div>
        )
    }
)

export { Abilities }