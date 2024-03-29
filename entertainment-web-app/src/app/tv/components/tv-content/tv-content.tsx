// Community
import React from 'react';

// Components
import ContentItem from '@/components/content-item/content-item';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/types/data-types';

/**
 * @description Component for the TV page content
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const TvContent = (): React.JSX.Element => {
    return (
        <main className="TvContent Content">
            <h2 className="Content-header header-l">TV Series</h2>

            <section className="ItemContent">
                {
                    data.map((item: MovieDataType) => {
                        if (item.category === 'TV Series') {
                            return (
                                <ContentItem key={ item.title } data={ item } />
                            );
                        }
                    })
                }
            </section>
        </main>
    );
};

export default TvContent;
