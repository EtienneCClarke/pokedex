import { it, expect, describe } from 'vitest'
import { render, screen } from "@testing-library/react"
import { PokemonList } from "../../src/components/pokemon/list";
import { Pokemon } from '../../src/components/pokemon/pokemon.types';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('Items', () => {
    
    it('Should display error text if pokemon array is empty', () => {

        render(<PokemonList pokemon={[]} loading={false} />)

        const text = screen.getByText(/error/i)

        expect(text).toBeInTheDocument();

    })

    it('Should render grid of links directing the user to the correct pokemon page', async () => {
        
        const pokemon: Pokemon[] = [
            { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/bulbasaur"},
            { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/rattata"},
            { name: "ho-oh", url: "https://pokeapi.co/api/v2/pokemon/ho-oh"},
        ];
        
        render(<PokemonList pokemon={pokemon} loading={false} />, { wrapper: BrowserRouter })

        const links = screen.getAllByRole("link");

        links.forEach((link, index) => {
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/pokemon/${pokemon[index].name}`);  
        })
        
    })

})