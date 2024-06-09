type Ability = {
    ability: {
        name: string;
        url: string;
    }
}

type Effect = {
    effect: string;
    short_effect: string;
    language: {
        name: string;
        url: string;
    }
}

interface AbilitiesProps extends React.HTMLAttributes<HTMLDivElement> {
    abilities?: Ability[];
}

interface AbilityProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    url: string;
    className?: string;
    ApiError: (_bool: boolean) => void;
}

export type {
    AbilitiesProps,
    AbilityProps,
    Ability,
    Effect
}