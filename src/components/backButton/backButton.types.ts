import { LinkProps } from "react-router-dom";

interface BackButtonProps extends Omit<LinkProps, "to"> {
    to?: string;
}

export type {
    BackButtonProps
}