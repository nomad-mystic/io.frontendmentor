// Community
import React from 'react';
import Link from 'next/link';

// Styles
import './sidebar-icons.css';

// Types
import { SidebarIconsTypes } from '@/app/components/sidebar/sidebar-types';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const SidebarIcons = (props: { data: SidebarIconsTypes }) => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            ${ props.data.src }
        </svg>
    `;

    return (
        <>
            <Link href={ props.data.path } dangerouslySetInnerHTML={ { __html: svg } }
                  className="SidebarIcons-icon"></Link>
        </>
    );
};

export default SidebarIcons;
