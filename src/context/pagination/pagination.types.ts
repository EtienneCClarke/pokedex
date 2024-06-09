import * as React from "react"

interface PaginationProviderProps {
    children?: React.ReactNode;
    initialPage?: number;
    initialPageSize?: number;
}

export type {
    PaginationProviderProps
}