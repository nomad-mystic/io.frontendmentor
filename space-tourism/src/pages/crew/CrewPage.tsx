// Community
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Styles
import './CrewPage.css';

// Components
import Header from '../../components/Header/Header';
import PageHeader from '../../components/PageHeader/PageHeader';
import CrewContent from './components/CrewContent';
import CrewImage from './components/CrewImage';

// Data
import data from '../crew/data/data.json';

// Utils
import ElementUtils from '../../utils/ElementUtils';
import UiUtils from '../../utils/UiUtils';
import CrewNav from './components/CrewNav';

// Interfaces
import CrewDataInterface from './interfaces/CrewDataInterface';

// State Actions
import { navigationAction } from '../../store/slices/navigation/navigation-slice';

/**
 * @description Create the content for the crew page
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const CrewPage = (): React.JSX.Element => {
    const dispatch = useDispatch();
    const [activeCrewMember, setActiveCrewMember] = useState('douglas');

    /**
     * @description Switch between our content elements
     * @private
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent<HTMLElement, MouseEvent>} event
     * @return {void}
     */
    const toggleActive = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
        // Reset our active class
        ElementUtils.removeClassFromAllElements('.CrewPage-main .CrewPage-nav menu li');

        const { target } = UiUtils.toggleActive(event);

        if (target) {
            target.classList.add('active');

            // Update the state
            setActiveCrewMember(target.id);
        }
    };

    // Reset navigation on load
    useEffect(() => {
        dispatch(navigationAction.closeNavigation());
    }, []);

    return (
        <>
            <Header />

            <main className="CrewPage-main max-w-container">

                <PageHeader
                    className="CrewPage-heading PageHeader--mobile"
                    number="02"
                    title="Meet your crew"
                />

                <section className="CrewPage-left">

                    <PageHeader
                        className="CrewPage-heading PageHeader--desktop"
                        number="02"
                        title="Meet your crew"
                    />

                    {
                        data.map((item: CrewDataInterface): ReactNode => {
                            if (activeCrewMember === item.id) {
                                return (<CrewContent key={ item.id } data={ item } />)
                            }
                        })
                    }

                    <div className="CrewPage-nav--desktop">
                        <CrewNav toggleActive={ (e: React.MouseEvent<HTMLElement, MouseEvent>) => toggleActive(e) } />
                    </div>

                </section>

                <div className="CrewPage-nav--mobile">
                    <CrewNav toggleActive={ (e: React.MouseEvent<HTMLElement, MouseEvent>) => toggleActive(e) } />
                </div>

                <section className="CrewPage-right">
                    {
                        data.map((item: CrewDataInterface): ReactNode => {
                            if (activeCrewMember === item.id) {
                                return (<CrewImage key={ item.id } data={ item } />)
                            }
                        })
                    }
                </section>
            </main>
        </>
    );
};

export default CrewPage;
