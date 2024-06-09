import { it, expect, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cries } from '../../src/components/pokemon/cries';
import React from 'react';

describe('Cries', () => {
  
	it('Renders cries component', () => {
		const cries = {
			latest: 'latest.mp3',
			legacy: 'legacy.mp3',
		}
		
		render(<Cries cries={cries} />)
		
		const audioElements = screen.getAllByRole('audio');

		audioElements.forEach((element) => {
			expect(element).toBeInTheDocument()
		})

	})

})