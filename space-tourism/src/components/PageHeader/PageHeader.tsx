// Community
import React from 'react';

// Styles
import './PageHeader.css';

// Types
import { PageHeaderType } from './types/PageHeaderTypes';

/**
 * @description Dumb component for displaying our page's titles
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {React.PropsWithChildren<PageHeaderType>} props
 * @return {React.JSX.Element}
 */
const PageHeader = (props: React.PropsWithChildren<PageHeaderType>): React.JSX.Element => {
    const classes = `${ props.className } PageHeader Heading-5 uppercase text-white`;

    return (
        <h2 className={ classes }>
            <span className="PageHeader-number">{ props.number }</span>
            { props.title }
        </h2>
    );
};

export default PageHeader;
