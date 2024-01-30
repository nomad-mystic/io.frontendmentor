'use client';

// Community
import React, { ChangeEvent, useRef, useState } from 'react';

// Styles
import './search.css';

// Components
import SearchResults from '@/components/search/search-results/search-results';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/types/data-types';

/**
 * @description Build our search functionality
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Search = (): React.JSX.Element => {
    const [selected, setSelected] = useState<MovieDataType[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const searchInput = useRef<HTMLInputElement>(null);

    /**
     * @description Handle the search event for when a user interacts with the UI
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return
     */
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const target = event.target as HTMLInputElement;

        if (target && typeof target !== 'undefined' && target.value !== '') {

            hideContent();

            filterContent(searchInput.current);

        } else {

            showContent();
            setSearchValue('');
        }
    }

    /**
     * @description Build the updated search results state
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {HTMLInputElement | null} searchInput
     * @return {void}
     */
    const filterContent = (searchInput: HTMLInputElement | null): void => {

        if (!searchInput || typeof searchInput === 'undefined') {
            return;
        }

        const inputValue = searchInput.value;

        const filteredValues = data.filter((item: MovieDataType) => {
            let title = item.title.toLowerCase();

            if (title.includes(inputValue.toLowerCase())) {
                return item;
            }
        });

        if (filteredValues && filteredValues.length > 0) {

            setSelected(filteredValues);
            setSearchValue(inputValue);

        } else {

            setSelected([]);

        }
    };

    /**
     * @description Hide the main content
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const hideContent = (): void => {
        const contentElement = window.document.querySelector('.Content') as HTMLElement;

        contentElement.classList.add('isInvisible');
        contentElement.classList.remove('isVisible');
    };

    /**
     * @description Show the main content
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const showContent = (): void => {
        const contentElement = window.document.querySelector('.Content') as HTMLElement;

        contentElement.classList.add('isVisible');
        contentElement.classList.remove('isInvisible');
    };

    return (
        <section className="Search">
            <form>
                <span className="Search-icon"></span>

                <label htmlFor="">
                    <input type="text"
                           ref={ searchInput }
                           className="header-m"
                           onChange={ handleSearchChange }
                           placeholder="Search for movies or TV series" />
                </label>
            </form>

            {
                searchValue.length > 0 && <SearchResults selected={ selected } searchValue={ searchValue } />
            }
        </section>
    );
};

export default Search;
