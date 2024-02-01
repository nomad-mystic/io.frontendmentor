// Community
import React from 'react';

// Styles
import './search-results.css';

// Types
import { MovieDataType } from '@/types/data-types';

// Components
import ContentItem from '@/components/content-item/content-item';

/**
 * @description Build the search results component
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {object} props
 * @param {Array<MovieDataType>} props.selected
 * @param {string} props.searchValue
 * @return {React.JSX.Element}
 */
const SearchResults = (props: { selected: Array<MovieDataType>, searchValue: string }): React.JSX.Element => {
    return (
        <section className="SearchResults">

            {
                props.selected.length > 0 &&
                <h2 className="header-l SearchResults-title">Found { props.selected.length } results for &#39;{ props.searchValue }&#39;</h2>
            }

            {
                props.selected.length <= 0 &&
                <h2 className="header-l SearchResults-title">Not results found</h2>
            }

            <section className="ItemContent">
                {
                    props.selected.map((item: MovieDataType) => {
                        return (
                            <ContentItem key={ item.title } data={ item } />
                        )
                    })
                }
            </section>
        </section>
    );
};

export default SearchResults;
