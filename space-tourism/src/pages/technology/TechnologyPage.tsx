// Community
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Styles
import './TechnologyPage.css';

// Components
import Header from '../../components/Header/Header';
import PageHeader from '../../components/PageHeader/PageHeader';
import TechnologyContent from './components/TechnologyContent/TechnologyContent';
import TechnologyImage from './components/TechnologyImage';

// Utils
import ElementUtils from '../../utils/ElementUtils';
import UiUtils from '../../utils/UiUtils';

// Interfaces
import TechnologyDataInterface from './interfaces/TechnologyDataInterface';

// Data
import data from './data/data.json';

// State Actions
import { navigationAction } from '../../store/slices/navigation/navigation-slice';

/**
 * @description Create the Technology page component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const TechnologyPage = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const [activeTech, setActiveTech] = useState('1');

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
        ElementUtils.removeClassFromAllElements('.TechnologyPage-main .TechnologyPage-nav menu li');

        const { target, parentListItem } = UiUtils.toggleActive(event, 'SPAN');

        if (target && parentListItem) {
            parentListItem.classList.add('active');

            // Update the state
            setActiveTech(parentListItem.id);
        }
    };

    // Reset navigation on load
    useEffect(() => {
        dispatch(navigationAction.closeNavigation());
    }, []);

    return (
        <>
            <Header />

            <main className="TechnologyPage-main max-w-container">
                <section className="TechnologyPage-left">
                    <PageHeader
                        className="TechnologyPage-heading PageHeader--desktop"
                        number="03"
                        title="SPACE LAUNCH 101"
                    />

                    <section className="TechnologyPage-content flex">
                        <nav className="TechnologyPage-nav">
                            <menu className="flex" onClick={ toggleActive }>
                                <li className="TechnologyPage-navItem flex active" id="1">
                                    <span className="TechnologyPage-navNumber">1</span>
                                    <span className="TechnologyPage-shape"></span>
                                </li>

                                <li className="TechnologyPage-navItem flex" id="2">
                                    <span className="TechnologyPage-navNumber">2</span>
                                    <span className="TechnologyPage-shape"></span>
                                </li>

                                <li className="TechnologyPage-navItem flex" id="3">
                                    <span className="TechnologyPage-navNumber">3</span>
                                    <span className="TechnologyPage-shape"></span>
                                </li>
                            </menu>
                        </nav>

                        <section className="TechnologyPage-center">
                            {
                                data.map((item: TechnologyDataInterface): ReactNode => {
                                    if (activeTech === item.id) {
                                        return (<TechnologyContent key={ item.id } data={ item } />)
                                    }
                                })
                            }
                        </section>
                    </section>
                </section>

                <section className="TechnologyPage-right flex flex-col items-center">
                    <PageHeader
                        className="TechnologyPage-heading PageHeader--mobile"
                        number="03"
                        title="SPACE LAUNCH 101"
                    />

                    {
                        data.map((item: TechnologyDataInterface): ReactNode => {
                            if (activeTech === item.id) {
                                return (<TechnologyImage key={ item.id } data={ item } />)
                            }
                        })
                    }
                </section>
            </main>
        </>
    );
};

export default TechnologyPage;
