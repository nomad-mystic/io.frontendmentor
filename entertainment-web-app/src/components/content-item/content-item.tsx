// Community
import React from 'react';

// Styles
import './content-item.css';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import Bookmark from '@/components/bookmark/bookmark';
import ContentMeta from '@/components/content-meta/content-meta';
import ContentImage from '@/components/content-item/content-image/content-image';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const ContentItem = (props: { data: MovieDataType }): React.JSX.Element => {
    return (
        <article className="ContentItem">
            <Bookmark />

            <section className="ContentItem-imageContainer">

                <ContentImage data={ props.data } />

            </section>

            <ContentMeta data={ props.data } />
        </article>
    );
};

export default ContentItem;
