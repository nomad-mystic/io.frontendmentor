import React, { ReactNode, useState } from 'react';

// Styles
import './CrewPage.css';
import Header from '../../components/Header/Header.tsx';
import data from '../crew/data/data.json';
import ElementUtils from '../../utils/ElementUtils.ts';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const CrewPage = (): React.JSX.Element => {
    const [activeCrewMember, setActiveCrewMember] = useState(1);

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

            // // Reset our active class
            // ElementUtils.removeClassFromAllElements(window.document.querySelectorAll('.DestinationPage-main .DestinationPage-nav menu li'));
            // target.classList.add('active');
            //
            // // Update the state
            // setActiveCrewMember(target.id);
        }
    };

    return (
        <>
            <Header/>

            <main className="CrewPage-main max-w-container">
                <section className="CrewPage-left">
                    <h2 className="CrewPage-heading Heading-5 uppercase text-white">{/*@todo Change this in the DestinationPage */}
                        <span className="CrewPage-number">02</span> Meet your crew</h2>

                    <article className="CrewPage-content">
                        <h2 className="CrewPage-title Heading-4">Commander</h2>
                        <h1 className="CrewPage-name Heading-3">Douglas Hurley</h1>
                        <p className="CrewPage-text Subheading-2 max-w-[444px] block">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    </article>

                    <nav className="CrewPage-nav">
                        <menu className="flex gap-[36px]" onClick={ toggleActive }>
                            <li className="CrewPage-navItem NavText active" id="douglas"></li>
                            <li className="CrewPage-navItem NavText" id="2"></li>
                            <li className="CrewPage-navItem NavText" id="3"></li>
                            <li className="CrewPage-navItem NavText" id="4"></li>
                        </menu>
                    </nav>
                </section>

                <section className="CrewPage-right">
                    <figure>
                        <img src="/crew/image-douglas-hurley.webp" alt=""/>
                    </figure>
                </section>
            </main>
        </>
    );
};

export default CrewPage;
