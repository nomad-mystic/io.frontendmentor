// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import MoviesContent from '@/app/movies/components/movies-content/movies-content';

/**
 * @description Build the Movies page
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const MoviesPage = (): React.JSX.Element => {
    return (
        <div className="Container">
            <Search searchType="Movie" placeholder="Search for movies" />

            <Sidebar />

            <MoviesContent />
        </div>
    );
};

export default MoviesPage;
