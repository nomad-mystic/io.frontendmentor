// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import TvContent from '@/app/tv/components/tv-content/tv-content';

/**
 * @description Build the TV page
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const TvPage = () => {
    return (
        <div className="container">
            <Search />

            <Sidebar />

            <TvContent />
        </div>
    );
};

export default TvPage;
