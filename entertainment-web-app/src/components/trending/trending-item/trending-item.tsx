// Community
import React from 'react';

// Styles
import './trending-item.css';

// Types
import { MovieDataType } from '@/types/data-types';

// Components
import Bookmark from '@/components/bookmark/bookmark';
import ContentMeta from '@/components/content-meta/content-meta';
import TrendingImage from '@/components/trending/trending-image/trending-image';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {MovieDataType} props.data
 * @return {React.JSX.Element}
 */
const TrendingItem = (props: { data: MovieDataType }): React.JSX.Element => {
    return (
        <article className="TrendingItem">
            <Bookmark />

            <div className="ContentItem-imageContainer">

                <TrendingImage data={ props.data } />

                <div className="TrendingItem-content">
                    <ContentMeta data={ props.data } />
                </div>
            </div>
        </article>
    );
};

export default TrendingItem;
