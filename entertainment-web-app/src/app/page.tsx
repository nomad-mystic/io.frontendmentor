import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import MainContent from '@/components/main-content/main-content';

const Home = () => {
    return (
        <div className="container">
            <Search searchType="all" placeholder="Search for movies or TV series"/>

            <Sidebar />

            <MainContent />
        </div>
    );
}

export default Home;
