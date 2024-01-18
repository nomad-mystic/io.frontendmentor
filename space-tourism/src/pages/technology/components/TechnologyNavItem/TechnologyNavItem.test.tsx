// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../.././../../utils/TestUtils';

// Components
import TechnologyNavItem from './TechnologyNavItem';

// Interfaces
import { TechnologyNavItemType } from '../../types/TechnologyNavItemTypes';

describe('TechnologyNavItem component tests that', () => {
    const props: TechnologyNavItemType = {
        number: '1',
        id: 1,
        className: 'active',
    };

    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyNavItem { ...props } /></MemoryRouter>);

        const component = screen.getByTestId('TechnologyNavItemComponent');

        expect(component).toBeInTheDocument();
    });

    test('elements have the correct text/attributes', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyNavItem { ...props } /></MemoryRouter>);

        const component = screen.getByTestId('TechnologyNavItemComponent');
        const navNumber = screen.getByTestId('TechnologyNavItemComponent-navNumber');

        expect(component).toHaveAttribute('id', '1');
        expect(component).toHaveClass(props.className);
        expect(navNumber).toHaveTextContent(props.number as string);
    });
});

