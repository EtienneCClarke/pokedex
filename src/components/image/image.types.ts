import * as React from "react";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
    src: string;
    alt?: string;
    placeholder?: string;
}

export type {
    ImageProps
}