type Sprites = {
    [key: string]: string | undefined
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    other?: any;
}

interface SpritesProps extends React.HTMLAttributes<HTMLDivElement> {
    sprites: Sprites;
}

interface MainImageProps {
    label?: string;
    url?: string;
}

export type {
    SpritesProps,
    MainImageProps,
    Sprites
}