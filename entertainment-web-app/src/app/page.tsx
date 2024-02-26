// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import MainContent from '@/components/main-content/main-content';
// import AuthPage from '@/components/auth/auth';

/**
 * @description Starting point for the app
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return React.JSX.Element
 */
const Home = (): React.JSX.Element => {
    return (
        <>
            <div className="Container AuthPoint">
                <Search searchType="All" placeholder="Search for movies or TV series" />

                <Sidebar />

                <MainContent />
            </div>

            {/*<AuthPage />*/}
        </>
    );
}

export default Home;
