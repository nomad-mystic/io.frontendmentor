import React from 'react';

const Search = () => {
    return (
        <section className="pt-12">
            <div className="relative bg-white-50 rounded-[16px] flex items-center">
                <input type="text"
                       placeholder="Search for any word…"
                       className="rounded-[16px] bg-white-50 w-full h-16 p-5 focus:outline-none focus:ring-1 focus:ring-purple"
                />
                <span className="absolute right-6 w-[18px] h-[18px] bg-search-icon"></span>
            </div>
        </section>
    );
};

export default Search;