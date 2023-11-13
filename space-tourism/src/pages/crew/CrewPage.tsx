import React, { ReactNode, useState } from 'react';

// Styles
import './CrewPage.css';
import Header from '../../components/Header/Header.tsx';
import data from '../destination/data/data.json';
import DestinationDataInterface from '../destination/interfaces/DestinationDataInterface.ts';
import DestinationImage from '../destination/components/DestinationImage.tsx';
import DestinationContent from '../destination/components/DestinationContent.tsx';
import ElementUtils from '../../utils/ElementUtils.ts';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const CrewPage = (): React.JSX.Element => {
    const [activeCrewMember, setActiveCrewMember] = useState('moon');

    /**
     * @description
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
            ElementUtils.removeClassFromAllElements(window.document.querySelectorAll('.DestinationPage-main .DestinationPage-nav menu li'));
            target.classList.add('active');

            // Update the state
            setActiveCrewMember(target.id);
        }
    };

    return (
        <>
            <Header/>

            <main className="DestinationPage-main max-w-container">
                <section className="DestinationPage-left">
                    <h2 className="DestinationPage-title Heading-5 uppercase text-white">
                        <span className="DestinationPage-number">02</span> Meet your crew</h2>

                    {
                        data.map((item: DestinationDataInterface): ReactNode => {
                            if (activeCrewMember === item.id) {
                                return (<DestinationImage key={ item.id } data={ item }/>)
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
                            if (activeCrewMember === item.id) {
                                return (<DestinationContent key={ item.id } data={ item }/>)
                            }
                        })
                    }

                </section>
            </main>
        </>
    );
};

export default CrewPage;
