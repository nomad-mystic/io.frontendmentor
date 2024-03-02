import React from 'react';

const Search = () => {
    return (
        <section className="pt-12">
            <div className="relative bg-white-50 w-full h-16 rounded-[16px] flex items-center p-5">
                <input type="text"
                       placeholder="Search for any word…"
                       className="rounded-[5px] bg-white-50"
                />
                <span className="absolute right-6 w-[15px] h-[15px] bg-search-icon"></span>
            </div>
        </section>
    );
};

export default Search;