'use client';

// Community
import React, { ChangeEvent } from 'react';

// Styles
import './search.css';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return
 */
const Search = () => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (target && typeof target !== 'undefined' && target.tagName) {

            console.log(target.value);

        }
    }

    return (
        <section className="Search">
            <form>
                <span className="Search-icon"></span>

                <label htmlFor="">
                    <input type="text" className="header-m" onChange={ handleSearchChange } />
                </label>
            </form>
        </section>
    );
};

export default Search;
