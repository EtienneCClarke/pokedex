import { it, expect, describe } from 'vitest'
import { render, screen } from "@testing-library/react"
import { BackButton } from "../../src/components/backButton";
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('Back Button', () => {
    
    it('Should link to "/" by default', () => {
        
        render(<BackButton />, { wrapper: BrowserRouter })

        expect(screen.getByRole("link")).toHaveAttribute("href", "/");

    })

    it('Should link to custom url when provided as a prop', () => {

        const url: string = "/pokemon/pinsir";
        
        render(<BackButton to={url} />, { wrapper: BrowserRouter })

        expect(screen.getByRole("link")).toHaveAttribute("href", url);

    })

})
