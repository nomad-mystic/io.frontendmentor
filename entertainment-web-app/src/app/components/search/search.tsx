'use client';

// Community
import React from 'react';

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
    return (
        <section className="Search">
            <form>
                <span className="Search-icon"></span>

                <label htmlFor="">
                    <input type="text" className="header-m" />
                </label>
            </form>
        </section>
    );
};

export default Search;
