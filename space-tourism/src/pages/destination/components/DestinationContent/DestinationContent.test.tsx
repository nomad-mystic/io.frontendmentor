// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../.././../../utils/TestUtils';

// Components
import DestinationContent from './DestinationContent';

// Interfaces
import DestinationDataInterface from '../../interfaces/DestinationDataInterface';

describe('DestinationContent component tests that', () => {
    const props: DestinationDataInterface = {
        title: 'MOON',
        body: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        time: '3 days',
    };

    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationContent data={ props } /></MemoryRouter>);

        const content = screen.getByTestId('DestinationContentComponent');

        expect(content).toBeInTheDocument();
    });

    test('children elements have the correct text', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><DestinationContent data={ props } /></MemoryRouter>);

        const title = screen.getByTestId('DestinationContentComponent-title');
        const body = screen.getByTestId('DestinationContentComponent-body');
        const distance = screen.getByTestId('DestinationContentComponent-distance');
        const time = screen.getByTestId('DestinationContentComponent-time');

        expect(title).toHaveTextContent(props.title as string);
        expect(body).toHaveTextContent(props.body as string);
        expect(distance).toHaveTextContent(props.distance as string);
        expect(time).toHaveTextContent(props.time as string);
    });
});

