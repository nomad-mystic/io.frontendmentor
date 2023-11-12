// Community
import { Route, Routes, useLocation, Location } from 'react-router-dom';
import React, { useEffect } from 'react';

// Styles
import './styles/base.css';
import './styles/typography.css';
import './App.css';

// Components
import HomePage from './pages/Home/HomePage';
import DestinationPage from './pages/destination/DestinationPage';
import CrewPage from './pages/crew/CrewPage';
import TechnologyPage from './pages/technology/TechnologyPage';

/**
 * @description Starting point for building our app components
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 * @constructor
 *
 * @return {React.JSX.Element}
 */
const App = (): React.JSX.Element => {
    // Hooks
    let location: Location = useLocation();

    /**
     * @description Based on the current route add a class to the Body element
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const appendBodyClassName = (): void => {
        let className: string;
        const bodyElement: HTMLElement = window.document.body;

        const cleanPathname: string = location.pathname.replace(/\//im, '');

        if (cleanPathname === '') {

            className = 'HomePage';

        } else {

            const capitalizedPath: string = cleanPathname.charAt(0).toUpperCase() + cleanPathname.slice(1);

            className = `${capitalizedPath}Page`;

        }

        // Set our classes
        bodyElement.classList.add(className);
    }

    useEffect(() => {

        appendBodyClassName();

    }, [location]);

    return (
        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="/destination" element={ <DestinationPage/> }/>
            <Route path="/crew" element={ <CrewPage/> }/>
            <Route path="/technology" element={ <TechnologyPage/> }/>
        </Routes>
    );
};

export default App;
