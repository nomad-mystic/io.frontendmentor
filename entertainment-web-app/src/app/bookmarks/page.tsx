// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import BookmarkContent from '@/app/bookmarks/components/bookmark-content/bookmark-content';

/**
 * @description Page for Bookmarks
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const BookmarksPage = (): React.JSX.Element => {
    return (
        <div className="Container">
            <Search searchType="Bookmarks" placeholder="Search for bookmarked shows" />

            <Sidebar />

            <BookmarkContent />
        </div>
    );
};

export default BookmarksPage;
