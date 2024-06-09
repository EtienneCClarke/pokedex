type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {
    stats: Stat[];
    className?: string;
}

export type {
    StatsProps,
    Stat
}