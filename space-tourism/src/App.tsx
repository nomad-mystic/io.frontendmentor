// Community
import { Route, Routes, useLocation, Location } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

// Styles
import './styles/base.css';
import './styles/typography.css';
import './App.css';

// Components
import HomePage from './pages/home/HomePage';
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

    const [locationState, setLocationState] = useState({
        'current': '',
    });

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

        // Remove the slash
        const cleanPathname: string = location.pathname.replace(/\//im, '');

        // Clear our previous class name
        if (bodyElement.classList.contains(locationState.current)) {
            bodyElement.classList.remove(locationState.current);
        }

        // Set class name
        if (cleanPathname === '') {

            className = 'HomePage';

        } else {

            const capitalizedPath: string = cleanPathname.charAt(0).toUpperCase() + cleanPathname.slice(1);

            className = `${capitalizedPath}Page`;

        }

        // Save our class name
        setLocationState({
            'current': className,
        });

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
