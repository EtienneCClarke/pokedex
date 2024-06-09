import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Image } from '../../src/components/image';
import React from 'react';

describe('Image', () => {
    
    it('Should render nothing when provided an empty string as the source', () => {

        const SRC: string = "";

        const { container } = render(<Image src={SRC} />);

        expect(container).toBeEmptyDOMElement();
        
    })
    
    it('Should render image once loaded', async () => {

        const SRC: string = "/pokeball.png";
        const ALT: string = "pokeball";

        render(<Image src={SRC} alt={ALT} />);

        const image = await screen.findByAltText(ALT);

        expect(image).toHaveAttribute('src', SRC);
        
    })

})