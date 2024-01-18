import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestUtils from '../../utils/TestUtils';
import PageHeader from './PageHeader';

// https://redux.js.org/usage/writing-tests
// https://vitest.dev/guide/#projects-using-vitest

describe('PageHeader component tests that', () => {
    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<PageHeader />);

        const component = screen.getByTestId('PageHeaderComponent');

        expect(component).toBeInTheDocument();
    });

    test('number span is rendered', async () => {
        TestUtils.renderWithProviders(<PageHeader />);

        const numberSpan = screen.getByTestId('PageHeader-number');

        expect(numberSpan).toBeInTheDocument();
    });

    test('title is correctly rendered', async () => {
        TestUtils.renderWithProviders(<PageHeader title="testing title" />);

        const h2Element = screen.getByText('testing title');

        expect(h2Element).toBeDefined();
    });
});

