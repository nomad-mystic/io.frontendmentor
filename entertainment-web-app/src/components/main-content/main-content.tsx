// Community
import React from 'react';

// Styles
import './main-content.css';

// Components
import AllContent from '@/components/all-content/all-content';
import Trending from '@/components/trending/trending';

/**
 * @description Build the Main page
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const MainContent = (): React.JSX.Element => {
    return (
        <main className="MainContent Content">

            <Trending />

            <AllContent />

        </main>
    );
};

export default MainContent;
