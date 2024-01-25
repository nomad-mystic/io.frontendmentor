import React from 'react';

// Components
import Search from '@/app/components/search/search';
import Sidebar from '@/app/components/sidebar/sidebar';
import MainContent from '@/app/components/main-content/main-content';

const Home = () => {
    return (
        <div className="container">
            <Search />

            <Sidebar />

            <MainContent />
        </div>
    );
}

export default Home;
