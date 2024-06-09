import { it, expect, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Abilities } from '../../src/components/pokemon/abilities';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

describe('Abilities Component', () => {

	it('Renders correct abilities', async () => {

		const abilities = [
			{ ability: { name: "Stench", url: "https://pokeapi.co/api/v2/ability/stench/"}},
			{ ability: { name: "Poison point", url: "https://pokeapi.co/api/v2/ability/poison-point/"}},
			{ ability: { name: "Chlorophyll", url: "https://pokeapi.co/api/v2/ability/chlorophyll/"}}
		]

		const client = new QueryClient();
		render(<QueryClientProvider client={client}><Abilities abilities={abilities} /></QueryClientProvider>)
		
		const abilities_headings = await screen.findAllByRole("heading");

	})

	it('Render nothing when no abilities are provided', () => {
		
		const { container } = render(<Abilities abilities={[]} />)
		
		expect(container).toBeEmptyDOMElement();
		
	})
	
	it('Display loading skeleton whilst loading data', () => {
		
		const abilities = [
			{ ability: { name: "Stench", url: "https://pokeapi.co/api/v2/ability/stench/"}},
			{ ability: { name: "Poison point", url: "https://pokeapi.co/api/v2/ability/poison-point/"}},
			{ ability: { name: "Chlorophyll", url: "https://pokeapi.co/api/v2/ability/chlorophyll/"}}
		]
		
		const client = new QueryClient();
		render(<QueryClientProvider client={client}><Abilities abilities={abilities} /></QueryClientProvider>)

		const divs = screen.getAllByRole("generic").filter(div => div.className.includes("_loading__wrapper"));

		expect(divs.length == abilities.length).toBeTruthy();
		
	})
})