import React from 'react';
import {render, waitFor, screen, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SummaryForm from '../SummaryForm';
import {createRoot} from 'react-dom/client'

test('should not have checkbox checked initially', () => {
    render(<SummaryForm/>);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked;    
})

test('should enable button on check, and disable on second check', () => {
    render(<SummaryForm/>);

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    const button = screen.getByRole('button', {name:"Confirm order"})

    expect(button).toBeEnabled;

    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked;
    expect(button).toBeDisabled;
})

test('should make tooltip visible on hover', async () => {
    render(<SummaryForm/>);
    
    const nullPopever = screen.queryByText(/No ice cream will actually be delivered/i);

    expect(nullPopever).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const getByPopover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(getByPopover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/No ice cream will actually be delivered/i));

    
})
