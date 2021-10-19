import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddProduct from '../../components/admin/AddProduct/AddProduct';
import { MemoryRouter } from 'react-router-dom';


describe('Admin AddProduct Component', () => {

    const addProduct = render(<MemoryRouter><AddProduct /></MemoryRouter>);

    const addInstrumentBody = screen.queryByTestId('addInstrumentBody');
    const instrumentName = screen.queryByTestId('instrumentName');
    const instrumentPrice = screen.queryByTestId('instrumentPrice');
    const instrumentDescription = screen.queryByTestId('instrumentDescription');
    const instrumentImageURL = screen.queryByTestId('instrumentImageURL');
    const instrumentQuantity = screen.queryByTestId('instrumentQuantity')
    const addInstrumentButton = screen.queryByTestId('addInstrumentButton')

    test('feAdminAddProduct1', () => {
        expect(addInstrumentBody).toBeTruthy();
        expect(instrumentName).toBeTruthy();
        expect(instrumentPrice).toBeTruthy();
        expect(instrumentDescription).toBeTruthy();
        expect(instrumentImageURL).toBeTruthy();
        expect(instrumentQuantity).toBeTruthy();
        expect(addInstrumentButton).toBeTruthy();  
        
        fireEvent.change(instrumentName, {target : {value : 'testInstrumentName'}})
        expect(instrumentName.value).toBe('testInstrumentName');

        fireEvent.change(instrumentPrice, {target : {value : '5'}})
        expect(instrumentPrice.value).toBe('5');

        fireEvent.change(instrumentDescription, {target : {value : 'Instrument Description'}})
        expect(instrumentDescription.value).toBe('Instrument Description');

        fireEvent.change(instrumentImageURL, {target : {value : 'instrument URL'}})
        expect(instrumentImageURL.value).toBe('instrument URL');

        fireEvent.change(instrumentQuantity, {target : {value : '120'}})
        expect(instrumentQuantity.value).toBe('120');
    })
 
})