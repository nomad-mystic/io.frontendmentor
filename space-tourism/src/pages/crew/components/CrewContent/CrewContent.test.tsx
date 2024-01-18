// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../.././../../utils/TestUtils';

// Components
import CrewContent from './CrewContent';

// Interfaces
import CrewDataInterface from '../../interfaces/CrewDataInterface';

describe('CrewContent component tests that', () => {
    const props: CrewDataInterface = {
        title: 'Testing Title',
        name: 'Testing Name',
        body: 'Testing Body Text',
    };

    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><CrewContent data={ props } /></MemoryRouter>);

        const content = screen.getByTestId('CrewContentComponent');

        expect(content).toBeInTheDocument();
    });

    test('children elements have the correct text', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><CrewContent data={ props } /></MemoryRouter>);

        const title = screen.getByTestId('CrewContentComponent-title');
        const name = screen.getByTestId('CrewContentComponent-name');
        const body = screen.getByTestId('CrewContentComponent-body');

        expect(title).toHaveTextContent('Testing Title');
        expect(name).toHaveTextContent('Testing Name');
        expect(body).toHaveTextContent('Testing Body Text');
    });
});

