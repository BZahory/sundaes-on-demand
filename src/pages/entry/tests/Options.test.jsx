import { render, screen } from "@testing-library/react";
import Options from "../Options";

test('should display image for each scoop option from server', async () => {
    render(<Options optionType="scoops"/>);

    //find images
    const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    const altText = scoopImages.map((e)=>e.alt);

    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);

    
})

test('should display image for each topping option from server', async () => {
    render(<Options optionType="toppings"/>);

    const toppingImages = await screen.findAllByRole('img', {name: /topping$/i});
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map((e)=>e.alt);

    expect(altText).toEqual(['Cherries', 'M&Ms', 'Hot fudge'].map((e) => e + " topping"));
    
})

test('should display error if exception is throw by axios', () => {
    
})

