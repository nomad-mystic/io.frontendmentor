// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../utils/TestUtils';

// Components
import Header from './Header';

// https://redux.js.org/usage/writing-tests
// https://vitest.dev/guide/#projects-using-vitest

describe('Header component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><Header /></MemoryRouter>);

        const header = screen.getByTestId('HeaderComponent');

        expect(header).toBeInTheDocument();
    });
});

