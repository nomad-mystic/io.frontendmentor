// Community
import React from 'react';

// Components
import ContentItem from '@/components/content-item/content-item';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/types/data-types';

/**
 * @description Build the Movies page
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const MoviesContent = (): React.JSX.Element => {
    return (
        <main className="MoviesContent Content">
            <h2 className="Content-header header-l">Movies</h2>

            <section className="ItemContent">
                {
                    data.map((item: MovieDataType) => {
                        if (item.category === 'Movie') {
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

export default MoviesContent;
