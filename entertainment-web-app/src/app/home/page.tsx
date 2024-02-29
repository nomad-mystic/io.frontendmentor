import React from 'react';
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import MainContent from '@/components/main-content/main-content';

const Home = () => {
    return (
        <>
            <div className="Container AuthPoint">
                <Search searchType="All" placeholder="Search for movies or TV series" />

                <Sidebar />

                <MainContent />
            </div>
        </>
    );
};

export default Home;
