import { it, expect, describe } from 'vitest'
import { render, screen } from "@testing-library/react";
import { NextButton, PreviousButton } from "../../src/components/pagination";
import React from 'react';

describe('Pagination Controls', () => {

    it('Disables next button when disabled prop is true', () => {

        render(<NextButton disabled={true} />);
        
        expect(screen.getByRole("button")).toBeDisabled();
        
    });
    
    it('Disables previous button when disabled prop is true', () => {

        render(<PreviousButton disabled={true} />);

        expect(screen.getByRole("button")).toBeDisabled();
        
    });

});