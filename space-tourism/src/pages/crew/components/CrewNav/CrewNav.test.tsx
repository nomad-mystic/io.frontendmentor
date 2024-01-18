// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../../../utils/TestUtils';

// Components
import CrewNav from './CrewNav';

describe('CrewNav component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><CrewNav toggleActive={ () => {
        } } /></MemoryRouter>);

        const content = screen.getByTestId('CrewNavComponent');

        expect(content).toBeInTheDocument();
    });

    test('the navItems have the correct attributes', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><CrewNav toggleActive={ () => {
        } } /></MemoryRouter>);

        const douglas = screen.getByTestId('CrewNav-navItem--douglas');
        const mark = screen.getByTestId('CrewNav-navItem--mark');
        const victor = screen.getByTestId('CrewNav-navItem--victor');
        const anousheh = screen.getByTestId('CrewNav-navItem--anousheh');

        expect(douglas).toHaveAttribute('id', 'douglas');
        expect(mark).toHaveAttribute('id', 'mark');
        expect(victor).toHaveAttribute('id', 'victor');
        expect(anousheh).toHaveAttribute('id', 'anousheh');
    });
});

