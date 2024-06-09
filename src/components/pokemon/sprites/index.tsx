import { forwardRef, useState } from "react";
import { SpritesProps, MainImageProps } from "./sprites.types";
import css from "./sprites.module.css";

const Images = forwardRef<HTMLDivElement, SpritesProps>(
    (
        { sprites, ...props },
        ref
    ) => {

        const [mainImage, setMainImage] = useState<MainImageProps>({
            label: "front_default",
            url: sprites.other["official-artwork"].front_default
        });

        const handleClick = (label?: string, url?: string) => {
            setMainImage({ label, url });
        }
        
        return (
            <div className={css.sprites_display__container} ref={ref} {...props}>
                <div className={css.main_image__container}>
                    <img
                        src={mainImage.url}
                        alt={mainImage.label}
                        className={css.main_image}
                    />
                </div>
                <div className={css.thumbnails__container}>
                    <img
                        className={`
                            ${css.thumbnail}
                            ${mainImage.label == "front_default" ? css.selected : ''}
                        `}
                        src={sprites.other["official-artwork"].front_default}
                        alt="front_default"
                        onClick={() => handleClick("front_default", sprites.other["official-artwork"].front_default)}
                    />
                    {sprites.other["official-artwork"].front_shiny &&
                        <img
                            className={`
                                ${css.thumbnail}
                                ${mainImage.label == "default_shiny" ? css.selected : ''}
                            `}
                            src={sprites.other["official-artwork"].front_shiny}
                            alt="default_shiny"
                            onClick={() => handleClick("default_shiny", sprites.other["official-artwork"].front_shiny)}
                        />
                    }
                    {Object.keys(sprites).slice(0, 8).reverse().map((sprite, index) => {

                        const url: string | undefined = sprites[sprite];

                        if(url == null || !url || sprite == "other") { return; }
                        
                        return (
                            <img
                                className={`
                                    ${css.thumbnail}
                                    ${mainImage.label == sprite ? css.selected : ''}
                                `}
                                key={index}
                                src={sprites[sprite]}
                                alt={sprite}
                                onClick={() => handleClick(sprite, sprites[sprite])}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
)

export { Images }