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

            showHideMainContent();

            console.log(target.value);

        }
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const showHideMainContent = () => {

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
