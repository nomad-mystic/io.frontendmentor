import React, { useState } from 'react';

// Styles
import './TechnologyPage.css';

// Components
import Header from '../../components/Header/Header';

// Utils
import ElementUtils from '../../utils/ElementUtils';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const TechnologyPage = (): React.JSX.Element => {
    const [activeTech, setActiveTech] = useState('1');

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
        if (target && typeof target !== 'undefined' && target.tagName === 'SPAN') {

            // Reset our active class
            ElementUtils.removeClassFromAllElements(window.document.querySelectorAll('.TechnologyPage-main .TechnologyPage-nav menu li'));

            const parentListItem = target.closest('li');

            if (parentListItem) {
                parentListItem.classList.add('active');

                // Update the state
                setActiveTech(target.id);
            }
        }
    };

    return (
        <>
            <Header />

            <main className="TechnologyPage-main max-w-container">
                <section className="TechnologyPage-right">
                    <nav className="TechnologyPage-nav">
                        <menu className="flex flex-col gap-[36px]" onClick={ toggleActive }>
                            <li className="TechnologyPage-navItem active" id="1">
                                <span className="TechnologyPage-number">1</span>
                                <span className="TechnologyPage-shape"></span>
                            </li>
                            <li className="TechnologyPage-navItem" id="2">
                                <span className="TechnologyPage-number">2</span>
                                <span className="TechnologyPage-shape"></span>
                            </li>
                            <li className="TechnologyPage-navItem" id="3">
                                <span className="TechnologyPage-number">3</span>
                                <span className="TechnologyPage-shape"></span>
                            </li>
                        </menu>
                    </nav>
                </section>

                <section className="TechnologyPage-center">
                    {/*{*/ }
                    {/*    data.map((item: DestinationDataInterface): ReactNode => {*/ }
                    {/*        if (activePlanet === item.id) {*/ }
                    {/*            return (<DestinationContent key={ item.id } data={ item }/>)*/ }
                    {/*        }*/ }
                    {/*    })*/ }
                    {/*}*/ }
                </section>

                <section className="TechnologyPage-left">
                    <h2 className="TechnologyPage-title Heading-5 uppercase text-white"><span
                        className="TechnologyPage-number">03</span> SPACE LAUNCH 101</h2>

                    {/*{*/ }
                    {/*    data.map((item: DestinationDataInterface): ReactNode => {*/ }
                    {/*        if (activePlanet === item.id) {*/ }
                    {/*            return (<DestinationImage key={ item.id } data={ item }/>)*/ }
                    {/*        }*/ }
                    {/*    })*/ }
                    {/*}*/ }

                </section>
            </main>
        </>
    );
};

export default TechnologyPage;
