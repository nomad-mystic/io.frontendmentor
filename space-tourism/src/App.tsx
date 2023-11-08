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

    useEffect(() => {
        const bodyElement: HTMLElement = window.document.body;
        const cleanPathname = location.pathname.replace(/\//im, '');

        bodyElement.classList.add(cleanPathname);

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
