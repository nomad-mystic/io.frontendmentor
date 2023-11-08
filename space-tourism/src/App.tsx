// Community
import { Route, Routes } from 'react-router-dom';
import React from 'react';

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
