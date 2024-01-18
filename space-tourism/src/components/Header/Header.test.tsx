// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../utils/TestUtils';

// Components
import Header from './Header';

describe('Header component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);

        const header = screen.getByTestId('HeaderComponent');

        expect(header).toBeInTheDocument();
    });
});

