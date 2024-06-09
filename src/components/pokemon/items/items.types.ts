type Item = {
    item: {
        name: string;
    }
}

interface ItemsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: any
}

export type {
    ItemsProps,
    Item
}