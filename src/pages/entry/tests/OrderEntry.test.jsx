import {render, screen, waitFor} from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import {rest} from 'msw';
import {server} from '../../../mocks/server'

test('should handle errors for scoops and toppings', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (res ,req, ctx)=>
        res(ctx.status(500))),
        rest.get('http://localhost:3030/topping'), (res, req, ctx) => 
        res(ctx.status(500)))
    });

    render(<OrderEntry/>);

    waitFor( async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
    })

