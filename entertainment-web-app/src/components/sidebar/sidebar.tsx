import React from 'react';
import Image from 'next/image';

// Styles
import './sidebar.css';

// Data
import icons from '@/data/sidebar-data.json';

// Types
import { SidebarIconsTypes } from '@/types/sidebar-types';

// Components
import SidebarIcons from '@/components/sidebar/sidebar-icons/sidebar-icons';

/**
 * @description Build the sidebar component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Sidebar = (): React.JSX.Element => {
    return (
        <aside className="SideBar">
            <Image src="/assets/logo.svg"
                   alt="Red image of a movie reel"
                   width={ 32 }
                   height={ 25 }
                   className="SideBar-rootImage"
            />

            <section className="SidebarIcons">
                {
                    icons.map((icon: SidebarIconsTypes) => {
                        return (
                            <SidebarIcons key={ icon.id } data={ icon } />
                        );
                    })
                }
            </section>

            <Image
                src="/assets/image-avatar.png"
                alt="Red image of a movie reel"
                width={ 32 }
                height={ 25 }
                className="SideBar-avatar"
            />
        </aside>
    );
};

export default Sidebar;
