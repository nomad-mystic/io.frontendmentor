import React, { ReactNode, useState } from 'react';

// Styles
import './DestinationPage.css';

// Components
import Header from '../../components/Header/Header';
import DestinationContent from './components/DestinationContent';
import DestinationImage from './components/DestinationImage';

// Utils
import ElementUtils from '../../utils/ElementUtils';

// Data
import data from './data/data.json';

// Interfaces
import DestinationDataInterface from './interfaces/DestinationDataInterface';
import UiUtils from '../../utils/UiUtils.ts';

/**
 * @description Create the content for the destination page
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const DestinationPage = (): React.JSX.Element => {
    const [activePlanet, setActivePlanet] = useState('moon');

    /**
     * @description Switch between our content elements
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
     * @return {void}
     */
    const toggleActive = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {

        // Reset our active class
        ElementUtils.removeClassFromAllElements('.DestinationPage-main .DestinationPage-nav menu li');

        const { target} = UiUtils.toggleActive(event);

        if (target) {
            target.classList.add('active');

            // Update the state
            setActivePlanet(target.id);
        }
    };

    return (
        <>
            <Header />

            <main className="DestinationPage-main max-w-container">
                <section className="DestinationPage-left">
                    <h2 className="DestinationPage-subTitle Heading-5 uppercase text-white"><span
                        className="DestinationPage-number">01</span> Pick your destination</h2>

                    {
                        data.map((item: DestinationDataInterface): ReactNode => {
                            if (activePlanet === item.id) {
                                return (<DestinationImage key={ item.id } data={ item } />)
                            }
                        })
                    }

                </section>

                <section className="DestinationPage-right">
                    <nav className="DestinationPage-nav">
                        <menu className="flex gap-[36px]" onClick={ toggleActive }>
                            <li className="DestinationPage-navItem NavText active" id="moon">MOON</li>
                            <li className="DestinationPage-navItem NavText" id="mars">MARS</li>
                            <li className="DestinationPage-navItem NavText" id="europa">EUROPA</li>
                            <li className="DestinationPage-navItem NavText" id="titan">TITAN</li>
                        </menu>
                    </nav>

                    {
                        data.map((item: DestinationDataInterface): ReactNode => {
                            if (activePlanet === item.id) {
                                return (<DestinationContent key={ item.id } data={ item } />)
                            }
                        })
                    }

                </section>
            </main>
        </>
    );
};

export default DestinationPage;
