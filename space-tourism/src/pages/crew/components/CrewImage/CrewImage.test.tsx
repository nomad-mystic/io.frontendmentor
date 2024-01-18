// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../../../../utils/TestUtils';

// Interfaces
import CrewDataInterface from '../../interfaces/CrewDataInterface';

// Components
import CrewImage from './CrewImage';

describe('CrewImage component tests that', () => {
    const props: CrewDataInterface = {
        image: '/crew/image-douglas-hurley.webp',
        imageAlt: 'Image of astronaut Douglas Hurley',
    };

    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><CrewImage data={ props } /></MemoryRouter>);

        const component = screen.getByTestId('CrewImageComponent');

        expect(component).toBeInTheDocument();
    });

    test('the img element has the correct attributes', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><CrewImage data={ props } /></MemoryRouter>);

        const img = screen.getByTestId('CrewImageComponent-image');

        expect(img).toHaveAttribute('src', props.image);
        expect(img).toHaveAttribute('alt', props.imageAlt);
    });
});

