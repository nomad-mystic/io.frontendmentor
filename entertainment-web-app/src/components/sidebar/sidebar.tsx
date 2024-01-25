import React from 'react';

// Styles
import './sidebar.css';

// Data
import icons from './sidebar-data.json';

// Types
import { SidebarIconsTypes } from './sidebar-types';

// Components
import SidebarIcons from '../sidebar-icons/sidebar-icons';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <aside className="SideBar">
            <Image src="/root.svg"
                   alt=""
                   width={ 32 }
                   height={ 25 }
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
        </aside>
    );
};

export default Sidebar;
