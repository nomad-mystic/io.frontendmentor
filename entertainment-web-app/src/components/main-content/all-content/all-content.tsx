import React from 'react';

// Styles
import './all-content.css';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/types/data-types';

// Components
import ContentItem from '@/components/content-item/content-item';

/**
 * @description Page content for displaying all the TV/Movies
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const AllContent = (): React.JSX.Element => {
    return (
        <section className="AllContent" id="AllContent">
            <h2 className="Content-header header-l">Recommended for you</h2>

            <section className="AllContent-movies ItemContent">
                {
                    data.map((item: MovieDataType) => {
                        return (
                            <ContentItem key={ item.title } data={ item } />
                        );
                    })
                }
            </section>
        </section>
    );
};

export default AllContent;
