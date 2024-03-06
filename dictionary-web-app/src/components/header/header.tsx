'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

// Store
import useFontStore from '@/store/font-store';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const Header = () => {
    // States
    const currentFont = useFontStore((state) => state.currentFont);
    const selectedFont = useFontStore((state) => state.selectedFont);

    // Refs
    const fontSwitcher = useRef<HTMLUListElement>(null);

    /**
     * @description Update our font style based on user selection
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent<HTMLUListElement>} event
     * @return {void}
     */
    const handleActiveFont = (event: React.MouseEvent<HTMLUListElement>): void => {
        const target = event.target as HTMLUListElement;

        selectedFont(target.dataset.fontStyle);
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const handleFontChange = (event: React.MouseEvent<HTMLElement>) => {
        if (!fontSwitcher.current || typeof fontSwitcher.current === 'undefined') {
            return;
        }

        fontSwitcher.current.classList.toggle('isInvisible');
    };

    return (
        <header className="flex justify-between items-center">
            <figure>
                <Image alt="Hollow image of a book"
                       src="/logo.svg"
                       width={ 32 }
                       height={ 36 }
                />
            </figure>

            <section className="flex gap-x-[26px] h-fit items-center cursor-pointer">
                <nav role="navigation" className="flex items-center gap-x-4 relative"
                     onClick={ (e) => handleFontChange(e) }
                >
                    <ul className="">
                        <li className="capitalize">{ currentFont }</li>

                        <ul className="bg-white-25 ring-1 p-5 rounded-2xl absolute right-0 z-10 mt-4 w-36 isInvisible"
                            ref={ fontSwitcher }
                            onClick={ (e) => handleActiveFont(e) }
                        >
                            <li className="body-m font-bold hover:text-purple cursor-pointer"
                                data-font-style="sans serif">Sans Serif
                            </li>

                            <li className="body-m font-bold hover:text-purple cursor-pointer mt-4"
                                data-font-style="serif">Serif
                            </li>

                            <li className="body-m font-bold hover:text-purple cursor-pointer mt-4"
                                data-font-style="mono">Mono
                            </li>
                        </ul>
                    </ul>
                    <span className="bg-arrow-icon w-[14px] h-[8px]"></span>
                </nav>

                <div className="block bg-white-75 w-[1px] self-stretch"></div>

                <div className="flex gap-x-[20px]">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>

                    <span>
                        <Image src="/icon-moon.svg"
                               alt=""
                               height={ 20 }
                               width={ 20 }
                        />
                    </span>
                </div>
            </section>
        </header>
    );
};

export default Header;