import { createContext, useEffect, useState } from "react";
import { PaginationProviderProps } from "./pagination.types";

const PaginationContext = createContext({
    currentPageIndex: 0,
    nextPage: () => {},
    previousPage: () => {},
    itemsPerPage: 0,
    setItemsPerPage: (_pageSize: number) => {},
    setTotalItemCount: (_total: number) => {},
    maxPageIndex: 0
});

const PaginationProvider = ({ children, initialPage, initialPageSize }: PaginationProviderProps) => {
    
    const INITIAL_PAGE = initialPage || 1;
    const DEFAULT_ITEMS_PER_PAGE = initialPageSize || 30;
    const DEFAULT_TOTAL_ITEMS = initialPageSize || 30;

    const [currentPageIndex, setCurrentPage] = useState<number>(INITIAL_PAGE);
    const [itemsPerPage, setItemsPerPage] = useState<number>(DEFAULT_ITEMS_PER_PAGE);
    const [totalItemCount, setTotalItemCount] = useState<number>(DEFAULT_TOTAL_ITEMS)
    const [maxPageIndex, setMaxPageIndex] = useState<number>(1);

    useEffect(() => {
        setMaxPageIndex(Math.ceil(totalItemCount / itemsPerPage));
    }, [totalItemCount])

    const nextPage = () => currentPageIndex < maxPageIndex ? setCurrentPage((currentPage) => currentPage + 1) : () => {};
    const previousPage = () => currentPageIndex > 1 ? setCurrentPage((currentPage) => currentPage - 1) : () => {};

    return (
        <PaginationContext.Provider value={{ currentPageIndex, nextPage, previousPage, itemsPerPage, setItemsPerPage, setTotalItemCount, maxPageIndex }}>
            {children}
        </PaginationContext.Provider>
    )

}

export { PaginationProvider, PaginationContext }