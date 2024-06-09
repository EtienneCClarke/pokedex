import React from "react";

interface SheetContextProps {
    open: boolean;
    isOpen: (value: boolean) => void
}

interface SheetProps {
    children?: React.ReactNode | React.ReactNode[];
}

interface SheetTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode | React.ReactNode[]
    className?: string;
}

interface CloseSheetButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode | React.ReactNode[]
    className?: string;
}

interface SheetOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export type {
    SheetProps,
    SheetContextProps,
    SheetTriggerProps,
    SheetContentProps,
    CloseSheetButtonProps,
    SheetOverlayProps
}