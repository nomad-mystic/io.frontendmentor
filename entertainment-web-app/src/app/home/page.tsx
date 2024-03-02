// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import MainContent from '@/components/main-content/main-content';

/**
 * @description Page for Home
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Home = (): React.JSX.Element => {
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
