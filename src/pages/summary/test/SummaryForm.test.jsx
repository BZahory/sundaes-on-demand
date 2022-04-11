import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import SummaryForm from '../SummaryForm';

test('should not have checkbox checked initially', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked;    
})

test('should enable button on check, and disable on second check', () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    const button = screen.getByRole('button', {name:"Confirm order"})

    expect(button).toBeEnabled;

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked;
    expect(button).toBeDisabled;
})