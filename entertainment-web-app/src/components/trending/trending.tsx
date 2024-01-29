'use client';

// Community
import React, { useRef } from 'react';

// Styles
import './trending.css';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/data/data-types';

// Components
import TrendingItem from '@/components/trending/trending-item/trending-item';

/**
 * @description Build the trending content
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const Trending = (): React.JSX.Element => {
    const trending = useRef<HTMLDivElement>(null);

    const handleWheelMovement = (event: React.WheelEvent) => {
        let items = window.document.getElementById('Trending-items');

        // event.preventDefault();

        if (!items || typeof items === 'undefined') {
            return;
        }

        console.dir(trending.current);
        console.dir(trending.current);
        console.dir(event);

        items.scrollLeft += event.deltaY;
    };


    return (
        <div className="Trending" ref={ trending }>
            <h2 className="Content-header header-l">Trending</h2>

            <section className="Trending-items" onWheel={ handleWheelMovement } id="Trending-items">
                {
                    data.map((item: MovieDataType) => {
                        if (item.isTrending) {
                            return (
                                <TrendingItem key={ item.title } data={ item } />
                            );
                        }
                    })
                }
            </section>
        </div>
    );
};

export default Trending;
