// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Utils
import TestUtils from '../../utils/TestUtils';

import Header from './Header';

// https://redux.js.org/usage/writing-tests
// https://vitest.dev/guide/#projects-using-vitest

// describe('Header component tests that', () => {
//     test('component is rendered', async () => {
//         TestUtils.renderWithProviders(<Header />);
//
//         const numberSpan = screen.getByTestId('PageHeaderComponent');
//
//         expect(numberSpan).toBeInTheDocument();
//     });
//
//     test('number span is rendered', async () => {
//         TestUtils.renderWithProviders(<Header />);
//
//         const numberSpan = screen.getByTestId('PageHeader-number');
//
//         expect(numberSpan).toBeInTheDocument();
//     });
//
//     test('title is correctly rendered', async () => {
//         TestUtils.renderWithProviders(<Header title="testing title" />);
//
//         const h2Element = screen.getByText('testing title');
//
//         expect(h2Element).toBeDefined();
//     });
// });

