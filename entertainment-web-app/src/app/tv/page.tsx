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
 * @return {React.JSX.Element}
 */
const TvPage = (): React.JSX.Element => {
    return (
        <div className="Container">
            <Search searchType="TV Series" placeholder="Search for TV series" />

            <Sidebar />

            <TvContent />
        </div>
    );
};

export default TvPage;
