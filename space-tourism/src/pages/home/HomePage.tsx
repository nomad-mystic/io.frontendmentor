// Community
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Styles
import './HomePage.css';

// Components
import Header from '../../components/Header/Header';
import HomeCircle from './components/HomeCircle/HomeCircle';

// State Actions
import { navigationAction } from '../../store/slices/navigation/navigation-slice';

/**
 * @description Create the Home page component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const HomePage = (): React.JSX.Element => {
    const dispatch = useDispatch();

    // Reset navigation on load
    useEffect(() => {
        dispatch(navigationAction.closeNavigation());
    }, []);

    return (
        <>
            <Header />

            <main className="HomePage-main max-w-container">
                <section className="HomePage-left">
                    <h2 className="HomePage-subtitle Heading-5">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="HomePage-title Heading-1">SPACE</h1>
                    <p className="HomePage-body Body">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </section>

                <section className="HomePage-right">

                    <HomeCircle />

                </section>
            </main>
        </>
    );
};

export default HomePage;
