import { ReactNode } from "react"

interface PaginationButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
}

export type {
    PaginationButtonProps
}