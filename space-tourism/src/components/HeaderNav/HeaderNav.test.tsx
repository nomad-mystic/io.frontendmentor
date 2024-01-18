// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../utils/TestUtils';

// Components
import HeaderNav from './HeaderNav';

describe('HeaderNav component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><HeaderNav /></MemoryRouter>);

        const component = screen.getByTestId('HeaderNavComponent');

        expect(component).toBeInTheDocument();
    });

    test('nav items UL is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><HeaderNav /></MemoryRouter>);

        const component = screen.getByTestId('HeaderNavComponent-navItems');

        expect(component).toBeInTheDocument();
    });


    test('all nav items are rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><HeaderNav /></MemoryRouter>);

        const home = screen.getByTestId('HeaderNavComponent-navItems--home');
        const destination = screen.getByTestId('HeaderNavComponent-navItems--destination');
        const crew = screen.getByTestId('HeaderNavComponent-navItems--crew');
        const technology = screen.getByTestId('HeaderNavComponent-navItems--technology');

        expect(home).toBeInTheDocument();
        expect(destination).toBeInTheDocument();
        expect(crew).toBeInTheDocument();
        expect(technology).toBeInTheDocument();
    });
});

