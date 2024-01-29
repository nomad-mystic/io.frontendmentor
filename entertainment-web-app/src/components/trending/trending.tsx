// Community
import React from 'react';

// Styles
import './trending.css';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import ContentItem from '@/components/content-item/content-item';

/**
 * @description Build the trending content
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Trending = (): React.JSX.Element => {
    return (
        <div className="Trending">
            <h2 className="Content-header header-l">Trending</h2>

            <section className="Trending-items">
                {
                    data.map((item: MovieDataType) => {
                        if (item.isTrending) {
                            return (
                                <ContentItem key={ item.title } data={ item } />
                            );
                        }
                    })
                }
            </section>
        </div>
    );
};

export default Trending;
