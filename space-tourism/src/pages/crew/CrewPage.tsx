import React, { ReactNode, useState } from 'react';

// Styles
import './CrewPage.css';

// Components
import Header from '../../components/Header/Header';
import CrewContent from './components/CrewContent';
import CrewImage from './components/CrewImage';

// Data
import data from '../crew/data/data.json';

// Utils
import ElementUtils from '../../utils/ElementUtils';

// Interfaces
import CrewDataInterface from './interfaces/CrewDataInterface';
import UiUtils from '../../utils/UiUtils.ts';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const CrewPage = (): React.JSX.Element => {
    const [activeCrewMember, setActiveCrewMember] = useState('douglas');

    /**
     * @description Switch between our content elements
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
     * @return {void}
     */
    const toggleActive = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        const target: HTMLElement = event.target as HTMLElement;

        // Sanity check
        if (target && typeof target !== 'undefined' && target.tagName === 'LI') {

            // Reset our active class
            ElementUtils.removeClassFromAllElements(window.document.querySelectorAll('.CrewPage-main .CrewPage-nav menu li'));

            const { target} = UiUtils.toggleActive(event);

            if (target) {
                target.classList.add('active');

                // Update the state
                setActiveCrewMember(target.id);
            }
        }
    };

    return (
        <>
            <Header/>

            <main className="CrewPage-main max-w-container">
                <section className="CrewPage-left">
                    <h2 className="CrewPage-heading Heading-5 uppercase text-white">{/*@todo Change this in the DestinationPage ie. -heading */ }
                        <span className="CrewPage-number">02</span> Meet your crew</h2>

                    {
                        data.map((item: CrewDataInterface): ReactNode => {
                            if (activeCrewMember === item.id) {
                                return (<CrewContent key={ item.id } data={ item }/>)
                            }
                        })
                    }

                    <nav className="CrewPage-nav">
                        <menu className="flex gap-[36px]" onClick={ toggleActive }>
                            <li className="CrewPage-navItem active" id="douglas"></li>
                            <li className="CrewPage-navItem" id="mark"></li>
                            <li className="CrewPage-navItem" id="victor"></li>
                            <li className="CrewPage-navItem" id="anousheh"></li>
                        </menu>
                    </nav>
                </section>

                <section className="CrewPage-right">
                    {
                        data.map((item: CrewDataInterface): ReactNode => {
                            if (activeCrewMember === item.id) {
                                return (<CrewImage key={ item.id } data={ item }/>)
                            }
                        })
                    }
                </section>
            </main>
        </>
    );
};

export default CrewPage;
