// Community
import React from 'react';

// Styles
import './content-meta.css';

// Types
import { MovieDataType } from '@/types/data-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {MovieDataType} props.data
 * @return {React.JSX.Element}
 */
const ContentMeta = (props: { data: MovieDataType }): React.JSX.Element => {
    return (
        <>
            <section className="ContentMeta-meta">
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

            <h2 className="ContentMeta-title header-s">{ props.data.title }</h2>
        </>
    );
};

export default ContentMeta;
