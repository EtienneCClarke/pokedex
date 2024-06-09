import { it, expect, describe } from 'vitest'
import { render, screen } from "@testing-library/react";
import { Items } from "../../src/components/pokemon/items";
import { Item } from '../../src/components/pokemon/items/items.types';
import React from 'react';

describe('Items', () => {
    
    it('Should not render component if item list is empty', () => {

        const { container } = render(<Items items={[]}/>)

        expect(container).toBeEmptyDOMElement();

    })

    it('Should render a list of items', () => {
        
        const items: Item[] = [{ item: { name: "oran-berry" } }, { item: { name: "sitrus-berry" } }];
        
        render(<Items items={items}/>)
        
        items.forEach(item => {
            expect(screen.getByText(item.item.name.replace("-", " "))).toBeInTheDocument();
        })
        
    })

})