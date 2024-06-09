import React from "react";

type Language = "eng" | "yoda";

interface LanguageProviderProps {
    children?: React.ReactNode | React.ReactNode[]
}

export type {
    LanguageProviderProps,
    Language
}