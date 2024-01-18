// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../../../utils/TestUtils';

// Interfaces
import TechnologyDataInterface from '../../interfaces/TechnologyDataInterface';

// Components
import TechnologyImage from './TechnologyImage';

describe('TechnologyImage component tests that', () => {
    const props: TechnologyDataInterface = {
        desktopImage: '/technology/image-launch-vehicle-portrait.jpg',
        mobileImage: '/technology/image-launch-vehicle-landscape.jpg',
        imageAlt: 'Image of a launch vehicle',
    };

    test('the img element has the correct attributes', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyImage data={ props } /></MemoryRouter>);

        const desktop = screen.getByTestId('TechnologyImageComponent-desktop');
        const mobile = screen.getByTestId('TechnologyImageComponent-mobile');

        expect(desktop).toHaveStyle(`background-image: url(${ props.desktopImage });`);
        expect(mobile).toHaveStyle(`background-image: url(${ props.mobileImage });`);
    });
});

