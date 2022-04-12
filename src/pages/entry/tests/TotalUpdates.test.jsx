import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

test('should update subtotal when scoops change', async() => {
    render(<Options optionType="scoops" />);

    const scoopSubTotal = screen.getByText("Scoops total: $", {exact:false});
    expect(scoopSubTotal).toHaveTextContent('0.00');
    
    const vanillaInput = await screen.findByRole('spinbutton', {name: "Vanilla"});

    userEvent.clear(vanillaInput);

    userEvent.type(vanillaInput, '1');

    expect(scoopSubTotal).toHaveTextContent('2.00');

    const chocolateInput = await screen.findByRole('spinbutton', {name: "Chocolate"})

    userEvent.clear(chocolateInput);

    userEvent.type(chocolateInput, '2');

    expect(scoopSubTotal).toHaveTextContent('6.00');
    
})
