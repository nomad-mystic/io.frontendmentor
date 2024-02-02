'use client';

// Community
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Styles
import './sidebar-icons.css';

// Types
import { SidebarIconsTypes } from '@/types/sidebar-types';

/**
 * @description Create each icon based in the SVG/Props that are passed into this component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {SidebarIconsTypes} props.data
 * @return {React.JSX.Element}
 */
const SidebarIcons = (props: { data: SidebarIconsTypes }): React.JSX.Element => {
    const [currentPage, setCurrentPage] = useState(false);

    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            ${ props.data.src }
        </svg>
    `;

    useEffect(() => {
        // Set the icons active state when on the right path
        const windowPathName = window.location.pathname;

        if (props.data.path === windowPathName) {
            setCurrentPage(true);
        }
    }, []);

    return (
        <>
            <Link href={ props.data.path } dangerouslySetInnerHTML={ { __html: svg } }
                  className={`SidebarIcons-icon ${currentPage ? 'isActive' : ''}`}></Link>
        </>
    );
};

export default SidebarIcons;
