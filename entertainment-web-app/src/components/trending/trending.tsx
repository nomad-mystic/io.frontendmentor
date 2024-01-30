'use client';

// Community
import React, { useRef } from 'react';

// Styles
import './trending.css';

// Data
import data from '@/data/data.json';

// Types
import { MovieDataType } from '@/types/data-types';

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

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.WheelEvent} event
     * @return {void}
     */
    const handleWheelMovement = (event: React.WheelEvent): void => {
        console.log(event);
        
        if (event.cancelable) {
            event.preventDefault();
        }

        let items = window.document.getElementById('Trending-items');
        let bodyElement = window.document.body;

        if (!items || typeof items === 'undefined') {
            return;
        }

        requestAnimationFrame(() => {
            // console.dir(trending.current);
            // console.dir(trending.current);
            // console.log('handleWheelMovement');
            // console.dir(event);

            // bodyElement.style.

            items.scrollLeft += event.deltaY;
        });
    };

    const handleWheelCapture = (event: React.WheelEvent) => {

        // console.log('handleWheelCapture');
        // console.log(event);


    }

    return (
        <div className="Trending" ref={ trending }>
            <h2 className="Content-header header-l">Trending</h2>

            <section className="Trending-items" onWheel={ (e) => {
                handleWheelMovement(e)
            } } onWheelCapture={ handleWheelCapture }
                     id="Trending-items">
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
