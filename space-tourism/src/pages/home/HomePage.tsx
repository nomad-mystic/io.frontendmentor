import React from 'react';

// Styles
import './HomePage.css';

// Components
import Header from '../../components/Header/Header';

/**
 * @description Create the Home page component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const HomePage = (): React.JSX.Element => {
    return (
        <>
            <Header />
            <main className="HomePage-main max-w-container">
                <section className="HomePage-left">
                    <h2 className="Heading-5">SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className="Heading-1">SPACE</h1>
                    <p className="Subheading-2">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </section>
                <section className="HomePage-right">
                    <div className="HomePage-circle">
                        <h3 className="Heading-4 HomePage-circleText">EXPLORE</h3>
                        <span className="HomePage-shape"></span>
                        <span className="HomePage-shapeBackground"></span>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
