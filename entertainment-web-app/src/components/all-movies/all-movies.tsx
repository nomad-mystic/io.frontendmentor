import React from 'react';

// Styles
import './all-movies.css';

// Data
import data from '../../data/data.json';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import MovieItem from '@/components/movie-item/movie-item';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const AllMovies = () => {
    return (
        <section className="AllMovies">
            <h2 className="AllMovies-header header-l">Recommended for you</h2>

            <section className="AllMovies-movies">
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

export default AllMovies;
