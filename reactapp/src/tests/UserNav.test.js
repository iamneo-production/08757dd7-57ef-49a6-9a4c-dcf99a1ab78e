import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserNavbar from "../components/UserNav/UserNav";
import { MemoryRouter } from 'react-router-dom';

describe('UserNavbar Component', () => {
    
    const userNav = render(<MemoryRouter><UserNavbar /></MemoryRouter>);

    const instrumentCartButton = screen.queryByTestId('instrumentCartButton');
    const instrumentHomeButton = screen.queryByTestId('instrumentHomeButton');
    const instrumentOrderButton = screen.queryByTestId('instrumentOrderButton');
    const logoutButton = screen.queryByTestId('logoutButton');
    const userNavbar = screen.queryByTestId('userNavbar');

    test('feUserNavbar1', () => {
        expect(instrumentCartButton).toBeTruthy();
        expect(instrumentHomeButton).toBeTruthy();
        expect(instrumentOrderButton).toBeTruthy();
        expect(logoutButton).toBeTruthy();
        expect(userNavbar).toBeTruthy();
    });

})