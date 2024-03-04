import React from 'react';

const NotFound = () => {
    return (
        <section className="flex justify-center">
            <h1 className="heading-s font-bold text-black-50">No Definitions Found</h1>
            <p className="body-m text-white-50">Sorry pal, we couldn't find definitions for the word you were looking
                for. You can try the search again at later time or head to the web instead.</p>
        </section>
    );
};

export default NotFound;