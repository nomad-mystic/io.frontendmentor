import React from 'react';

// Styles
import './DestinationPage.css';

// Components
import Header from '../../components/Header/Header.tsx';

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
            <Header />

            <main className="DestinationPage-main max-w-container">
                <section className="DestinationPage-left">
                    <h2 className="DestinationPage-title Heading-5 uppercase text-white"><span className="DestinationPage-number">01</span> Pick your destination</h2>

                    <figure className="DestinationPage-image">
                        <img src="/destination/image-moon.png" alt=""/>
                    </figure>
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

                    <section>
                        <article>
                            <header>
                                <h1 className="Heading-2">MOON</h1>
                            </header>

                            <p className="DestinationPage-text Subheading-2 max-w-[444px] block">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

                            <section className="DestinationPage-data flex">
                                <div className="DestinationPage-distance">
                                    <h4>AVG. DISTANCE</h4>
                                    <p className="Subheading-1">384,400 km</p>
                                </div>
                                <div className="DestinationPage-travel">
                                    <h4>Est. travel time</h4>
                                    <p className="Subheading-1">3 days</p>
                                </div>
                            </section>
                        </article>
                    </section>
                </section>
            </main>
        </>
    );
};

export default DestinationPage;
