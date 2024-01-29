// Community
import React from 'react';
import Image from 'next/image';

// Styles
import './trending-item.css';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import Bookmark from '@/components/bookmark/bookmark';
import ContentMeta from '@/components/content-meta/content-meta';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const TrendingItem = (props: { data: MovieDataType }): React.JSX.Element => {
    return (
        <article className="TrendingItem">
            <Bookmark />

            <div className="ContentItem-imageContainer">

                <span className="ContentItem-overlay">
                    <span className="ContentItem-play">
                        <span className="icon"></span>
                        <h4 className="header-xs">Play</h4>
                    </span>
                </span>

                <Image src={ props.data.thumbnail.regular.large }
                       alt={ props.data.title }
                       width={ 280 }
                       height={ 174 }
                       className="ContentItem-image"
                />

                <div className="TrendingItem-content">
                    <ContentMeta data={ props.data } />
                </div>
            </div>
        </article>
    );
};

export default TrendingItem;
