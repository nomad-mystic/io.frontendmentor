// Community
import React from 'react';
import Image from 'next/image';

// Styles
import './trending-item.css';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import Bookmark from '@/components/bookmark/bookmark';

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
                    <section className="ContentItem-meta">
                        <p className="body-s">{ props.data.year }</p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
                        </svg>

                        <p className="body-s category"><span
                            className={ `icon ${ props.data.category }` }></span>{ props.data.category }
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                            <circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white" />
                        </svg>

                        <p className="body-s">{ props.data.rating }</p>
                    </section>

                    <h2 className="ContentItem-title header-s">{ props.data.title }</h2>
                </div>
            </div>
        </article>
    );
};

export default TrendingItem;
