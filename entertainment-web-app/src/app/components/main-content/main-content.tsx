import React from 'react';

// Styles
import './main-content.css';

// Components
import AllMovies from '@/app/components/all-movies/all-movies';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const MainContent = () => {
    return (
        <main className="MainContent">

            <AllMovies />

        </main>
    );
};

export default MainContent;
