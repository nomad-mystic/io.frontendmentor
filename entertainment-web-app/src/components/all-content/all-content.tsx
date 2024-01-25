import React from 'react';

// Styles
import './all-content.css';

// Data
import data from '../../data/data.json';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import MovieItem from '@/components/content-item/content-item';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const AllContent = () => {
    return (
        <section className="AllContent" id="AllContent">
            <h2 className="AllContent-header header-l">Recommended for you</h2>

            <section className="AllContent-movies">
                {
                    data.map((movie: MovieDataType) => {
                        return (
                            <MovieItem key={ movie.title } data={ movie } />
                        );
                    })
                }
            </section>
        </section>
    );
};

export default AllContent;
