import { createContext, forwardRef, useContext, useEffect, useState } from "react";
import { SheetContextProps, SheetContentProps, SheetProps, SheetTriggerProps, CloseSheetButtonProps, SheetOverlayProps } from "./sheet.types";
import css from "./sheet.module.css";

const SheetContext = createContext<SheetContextProps>({
    open: false,
    isOpen: (_value: boolean) => {}
})

const Sheet = ({ children }: SheetProps) => {

    const [open, isOpen] = useState<boolean>(false);

    return (
        <SheetContext.Provider value={{ open, isOpen }}>
            {children}
        </SheetContext.Provider>
    )
}

const SheetTrigger = forwardRef<HTMLDivElement, SheetTriggerProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { open, isOpen } = useContext(SheetContext);

        useEffect(() => {
            if(open) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = "unset"
            }
        }, [open])

        return (
            <div
                className={className ? className : css.trigger}
                onClick={() => isOpen(!open)}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        )

    }
)

const SheetContent = forwardRef<HTMLDivElement, SheetContentProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { open } = useContext(SheetContext);

        return (
            <div
                className={className ? `${css.sheet} ${className}` : `${css.sheet} ${css.default_style}`}
                tabIndex={-1}
                data-open={open}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        )

    }
)

const CloseSheetButton = forwardRef<HTMLButtonElement, CloseSheetButtonProps>(
    (
        { children, className, ...props },
        ref
    ) => {

        const { isOpen } = useContext(SheetContext);

        return (
            <button
                className={className ? className : css.close_button}
                onClick={() => isOpen(false)}
                ref={ref}
                {...props}
            >
                {children ?
                    children
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className={css.close_svg}>
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                }
            </button>
        )
    }
)

const SheetOverlay = forwardRef<HTMLDivElement, SheetOverlayProps>(
    (
        { className, ...props },
        ref
    ) => {

        const { open, isOpen } = useContext(SheetContext);

        return (
            <div
                className={className ? className : css.overlay}
                data-open={open}
                onClick={() => isOpen(false)}
                ref={ref}
                {...props}
            />
        )
    }
)

export {
    Sheet,
    SheetTrigger,
    SheetContent,
    CloseSheetButton,
    SheetOverlay
}