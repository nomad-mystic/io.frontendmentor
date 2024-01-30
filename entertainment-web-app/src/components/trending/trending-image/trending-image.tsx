'use client';

// Community
import React, { useState } from 'react';
import Image from 'next/image';

// Types
import { MovieDataType } from '@/types/data-types';

/**
 * @description Build our images for the trending component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {MovieDataType} props.data
 * @return {React.JSX.Element}
 */
const TrendingImage = (props: { data: MovieDataType }): React.JSX.Element => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <span className="ContentItem-overlay"
                  style={ { opacity: loading ? 0 : 1 } }
            >
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
                   style={ {
                       opacity: loading ? 0 : 1
                   } }
                   onLoad={ () => {
                       setLoading(false);
                   } }
            />

            <div className={ `${ loading ? 'isLoading' : '' }` }></div>
        </>
    );
};

export default TrendingImage;
