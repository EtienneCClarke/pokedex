type Cries = {
    latest: string;
    legacy: string;
}

interface CriesProps extends React.HTMLAttributes<HTMLDivElement> {
    cries: Cries;
}

export type {
    CriesProps,
    Cries
}