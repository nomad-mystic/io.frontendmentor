// Community
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

// Utils
import TestUtils from '../.././../../utils/TestUtils';

// Components
import TechnologyContent from './TechnologyContent';

// Interfaces
import TechnologyDataInterface from '../../interfaces/TechnologyDataInterface';

describe('TechnologyContent component tests that', () => {
    const props: TechnologyDataInterface = {
        subtitle: 'THE TERMINOLOGY…',
        name: 'LAUNCH VEHICLE',
        body: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
    };

    test('component is rendered', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyContent data={ props } /></MemoryRouter>);

        const content = screen.getByTestId('TechnologyContentComponent');

        expect(content).toBeInTheDocument();
    });

    test('children elements have the correct text', async () => {
        TestUtils.renderWithProviders(<MemoryRouter><TechnologyContent data={ props } /></MemoryRouter>);

        const subtitle = screen.getByTestId('TechnologyContentComponent-subtitle');
        const name = screen.getByTestId('TechnologyContentComponent-name');
        const body = screen.getByTestId('TechnologyContentComponent-body');

        expect(subtitle).toHaveTextContent(props.subtitle as string);
        expect(name).toHaveTextContent(props.name as string);
        expect(body).toHaveTextContent(props.body as string);
    });
});

