import { forwardRef } from "react";
import { usePagination } from "../../hooks/pagination";
import { PaginationButtonProps } from "./pagination.types";
import css from "./pagination.module.css";

const NextButton = forwardRef<HTMLButtonElement, PaginationButtonProps>(
    (
        { children, className, disabled, ...props },
        ref
    ) => {

    const { nextPage, currentPageIndex, maxPageIndex } = usePagination();

    return (
        <button
            onClick={nextPage}
            className={className ? className : "button"}
            disabled={disabled ? disabled : currentPageIndex >= maxPageIndex ? true : false}
            {...props}
            ref={ref}
        >
            {children ?
                children
                :
                <svg width="19" height="31" viewBox="0 0 19 31" className={css.chevron} xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8108 15.5946L0 3.7838L3.59459 0.189209L19 15.5946L3.59459 31L0 27.4054L11.8108 15.5946Z"/>
                </svg>
            }
        </button>
    )
})

const PreviousButton = forwardRef<HTMLButtonElement, PaginationButtonProps>(
    (
        { children, className, disabled, ...props },
        ref
    ) => {

    const { previousPage, currentPageIndex } = usePagination();

    return (
        <button
            onClick={previousPage}
            className={className ? className : "button"}
            disabled={disabled ? disabled : currentPageIndex <= 1 ? true : false}
            {...props}
            ref={ref}
        >
            {children ?
                children
                :
                <svg width="19" height="31" viewBox="0 0 19 31" className={css.chevron} xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.18919 15.5946L19 27.4054L15.4054 31L-1.04876e-06 15.5946L15.4054 0.18919L19 3.78378L7.18919 15.5946Z"/>
                </svg>
            }
        </button>
    )
})

export {
    NextButton,
    PreviousButton
}