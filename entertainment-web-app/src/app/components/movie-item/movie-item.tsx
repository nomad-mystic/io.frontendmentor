// Community
import React from 'react';
import Image from 'next/image';

// Styles
import './movie-item.css';

// Types
import { MovieDataType } from '@/app/data/data-types';

// Components
import Bookmark from '@/app/components/bookmark/bookmark';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const MovieItem = (props: { data: MovieDataType }) => {
    return (
        <article className="MovieItem">
            <Bookmark />

            <div className="MovieItem-imageContainer">

                <span className="MovieItem-overlay">
                    <span className="MovieItem-play">
                        <span className="icon"></span>
                        <h4 className="header-xs">Play</h4>
                    </span>
                </span>

                <Image src={ props.data.thumbnail.regular.large }
                       alt={ props.data.title }
                       width={ 280 }
                       height={ 174 }
                       className="MovieItem-image"
                />
            </div>

            <section className="MovieItem-meta">
                <p className="body-s">{ props.data.year }</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                    <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
                </svg>

                <p className="body-s"><span className="icon"></span>{ props.data.category }</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                    <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
                </svg>

                <p className="body-s">{ props.data.rating }</p>
            </section>

            <h2 className="MovieItem-title header-xs">{ props.data.title }</h2>
        </article>
    );
};

export default MovieItem;
