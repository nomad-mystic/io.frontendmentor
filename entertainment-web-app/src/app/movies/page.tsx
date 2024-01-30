// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import MoviesContent from '@/app/movies/components/movies-content/movies-content';

const MoviesPage = () => {
    return (
        <div className="container">
            <Search searchType="movies" placeholder="Search for movies" />

            <Sidebar />

            <MoviesContent />
        </div>
    );
};

export default MoviesPage;
