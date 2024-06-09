import { it, expect, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Images } from '../../src/components/pokemon/sprites';
import { Sprites } from '../../src/components/pokemon/sprites/sprites.types';
import React from 'react';

describe('Images', () => {

    
    it('Renders front_default as first image in showcase', () => {

        const sprites: Sprites = {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
            other: {
                "official-artwork": {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png"
                }
            }
        }

        render(<Images sprites={sprites} />)

        // const mainImage = screen.getByAltText("front_default");

        // expect(mainImage).toBeInTheDocument();
        // expect(mainImage.className.includes("main_image")).toBeTruthy();
        
    })

    it('Renders all spites as thumbnails', () => {
    
        const sprites: Sprites = {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
            other: {
                "official-artwork": {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png"
                }
            }
        }

        render(<Images sprites={sprites} />)

        const thumbnails = screen.getAllByRole("img").filter(img => img.className.includes("thumbnail"));

        const keys = Object.keys(sprites).slice(0, 4).concat(Object.keys(sprites.other["official-artwork"]));

        thumbnails.forEach(element => {
            expect(element.hasAttribute("src")).toBeTruthy();
        })

    })

    it('Correct number of thumbnails rendered', () => {
    
        const sprites: Sprites = {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
            other: {
                "official-artwork": {
                    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
                    front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png"
                }
            }
        }

        render(<Images sprites={sprites} />)

        const thumbnails = screen.getAllByRole("img").filter(img => img.className.includes("thumbnail"));

        const keys = Object.keys(sprites).slice(0, 4).concat(Object.keys(sprites.other["official-artwork"]));
        
        expect(thumbnails.length).toEqual(keys.length);

    })

})