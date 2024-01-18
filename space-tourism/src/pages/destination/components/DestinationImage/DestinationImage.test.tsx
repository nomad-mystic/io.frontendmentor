// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../../../utils/TestUtils';

// Interfaces
import DestinationDataInterface from '../../interfaces/DestinationDataInterface';

// Components
import DestinationImage from './DestinationImage';

describe('DestinationImage component tests that', () => {
    const props: DestinationDataInterface = {
        image: '/destination/image-moon.webp',
        imageAlt: 'Image of the Moon',
    };

    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationImage data={ props } /></MemoryRouter>);

        const component = screen.getByTestId('DestinationImageComponent');

        expect(component).toBeInTheDocument();
    });

    test('the img element has the correct attributes', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationImage data={ props } /></MemoryRouter>);

        const img = screen.getByTestId('DestinationImageComponent-image');

        expect(img).toHaveAttribute('src', props.image);
        expect(img).toHaveAttribute('alt', props.imageAlt);
    });
});

