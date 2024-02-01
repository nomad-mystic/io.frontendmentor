// Community
import React from 'react';

// Components
import Search from '@/components/search/search';
import Sidebar from '@/components/sidebar/sidebar';
import BookmarkContent from '@/app/bookmarks/components/bookmark-content/bookmark-content';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const BookmarksPage = () => {
    return (
        <div className="container">
            <Search searchType="Bookmarks" placeholder="Search for bookmarked shows" />

            <Sidebar />

            <BookmarkContent />
        </div>
    );
};

export default BookmarksPage;
