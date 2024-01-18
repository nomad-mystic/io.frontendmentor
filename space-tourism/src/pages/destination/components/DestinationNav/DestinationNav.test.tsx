// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../../../utils/TestUtils';

// Components
import DestinationNav from './DestinationNav.tsx';

describe('DestinationNav component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationNav toggleActive={() => {}}/></MemoryRouter>);

        const content = screen.getByTestId('DestinationNavComponent');

        expect(content).toBeInTheDocument();
    });

    test('the navItems have the correct attributes', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationNav toggleActive={() => {}}/></MemoryRouter>);

        const moon = screen.getByTestId('DestinationNav-navItem--moon');
        const mars = screen.getByTestId('DestinationNav-navItem--mars');
        const europa = screen.getByTestId('DestinationNav-navItem--europa');
        const titan = screen.getByTestId('DestinationNav-navItem--titan');

        expect(moon).toHaveAttribute('id', 'moon');
        expect(mars).toHaveAttribute('id', 'mars');
        expect(europa).toHaveAttribute('id', 'europa');
        expect(titan).toHaveAttribute('id', 'titan');
    });

    test('the navItems have the correct text', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationNav toggleActive={() => {}}/></MemoryRouter>);

        const moon = screen.getByTestId('DestinationNav-navItem--moon');
        const mars = screen.getByTestId('DestinationNav-navItem--mars');
        const europa = screen.getByTestId('DestinationNav-navItem--europa');
        const titan = screen.getByTestId('DestinationNav-navItem--titan');

        expect(moon).toHaveTextContent('MOON');
        expect(mars).toHaveTextContent('MARS');
        expect(europa).toHaveTextContent('EUROPA');
        expect(titan).toHaveTextContent('TITAN');
    });
});

