'use client';

// Community
import React, { ChangeEvent, useState } from 'react';

// Styles
import './search.css';
import SearchResults from '@/components/search-results/search-results';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const Search = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [selected, setSelected] = useState([]);

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target && typeof target !== 'undefined' && target.tagName && target.value !== '') {

            hideContent();

            console.log(target.value);

        } else {

            showContent();

        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const hideContent = () => {
        const contentElement = window.document.getElementById('AllContent') as HTMLElement;

        contentElement.classList.add('isInvisible');
        contentElement.classList.remove('isVisible');
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const showContent = () => {
        const contentElement = window.document.getElementById('AllContent') as HTMLElement;

        contentElement.classList.add('isVisible');
        contentElement.classList.remove('isInvisible');
    };

    return (
        <section className="Search">
            <form>
                <span className="Search-icon"></span>

                <label htmlFor="">
                    <input type="text"
                           className="header-m"
                           onChange={ handleSearchChange }
                           placeholder="Search for movies or TV series" />
                </label>
            </form>

            <SearchResults selected={ selected } />
        </section>
    );
};

export default Search;
