// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../.././../../utils/TestUtils';

// Components
import TechnologyNav from './TechnologyNav';

describe('TechnologyNavComponent component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyNav toggleActive={ () => {
        } } /></MemoryRouter>);

        const content = screen.getByTestId('TechnologyNavComponent');

        expect(content).toBeInTheDocument();
    });

    test('child component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyNav toggleActive={ () => {
        } } /></MemoryRouter>);

        const children = await screen.findAllByTestId('TechnologyNavItemComponent');

        expect(children).toHaveLength(3);
    });
});

