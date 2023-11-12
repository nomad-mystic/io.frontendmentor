import React, { ReactNode } from 'react';

// Styles
import './DestinationPage.css';

// Components
import Header from '../../components/Header/Header';
import DestinationContent from './components/DestinationContent';

// Data
import data from './data/data.json';

// Interfaces
import DestinationDataInterface from './interfaces/DestinationDataInterface';
import DestinationImage from './components/DestinationImage';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const DestinationPage = (): React.JSX.Element => {
    return (
        <>
            <Header/>

            <main className="DestinationPage-main max-w-container">
                <section className="DestinationPage-left">
                    <h2 className="DestinationPage-title Heading-5 uppercase text-white"><span
                        className="DestinationPage-number">01</span> Pick your destination</h2>

                    {
                        data.map((item: DestinationDataInterface): ReactNode => {
                            return (<DestinationImage key={ item.id } data={ item }/>)
                        })
                    }

                </section>

                <section className="DestinationPage-right">
                    <nav className="DestinationPage-nav">
                        <menu className="flex gap-[36px]">
                            <li className="DestinationPage-navItem NavText active">MOON</li>
                            <li className="DestinationPage-navItem NavText">MARS</li>
                            <li className="DestinationPage-navItem NavText">EUROPA</li>
                            <li className="DestinationPage-navItem NavText">TITAN</li>
                        </menu>
                    </nav>

                    {
                        data.map((item: DestinationDataInterface): ReactNode => {
                            return (<DestinationContent key={ item.id } data={ item }/>)
                        })
                    }

                </section>
            </main>
        </>
    );
};

export default DestinationPage;
