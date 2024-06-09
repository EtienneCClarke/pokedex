import { it, expect, describe, beforeEach } from 'vitest'
import { LanguageProvider } from '../../src/context/language';
import { render, screen } from "@testing-library/react"
import { Settings } from "../../src/components/settings";
import React from 'react';

describe('Settings menu', () => {

    beforeEach(() => {
        render(
            <LanguageProvider>
                <Settings />
            </LanguageProvider>
        );
    });

    it('Default language option should be English', () => {

        screen.getByRole("option", { name: "English", selected: true });
        screen.getByRole("option", { name: "Yoda", selected: false });

    });

})