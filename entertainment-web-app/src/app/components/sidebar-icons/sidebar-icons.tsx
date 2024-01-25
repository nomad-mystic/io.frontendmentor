// Community
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    return (
        <>
            <Link href={ props.data.path }>
                <Image
                    src={ props.data.src }
                    alt={ props.data.alt }
                    width={ 20 }
                    height={ 20 }
                    className="SidebarIcons-icon"
                />
            </Link>
        </>
    );
};

export default SidebarIcons;
