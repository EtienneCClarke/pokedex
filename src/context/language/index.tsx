import { createContext, useState } from "react";
import { Language, LanguageProviderProps } from "./language.types";

const LanguageContext = createContext({
    language: "",
    setLanguage: (_language: Language) => {}
})

const LanguageProvider = ({ children }: LanguageProviderProps) => {

    const [language, setLanguage] = useState<Language>("eng");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )

}

export { LanguageProvider, LanguageContext }