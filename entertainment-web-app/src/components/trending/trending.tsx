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
    const trendingItems = useRef<HTMLDivElement>(null);

    /**
     * @description Create the scrolling effect on wheel movement
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.WheelEvent} event
     * @return {void}
     */
    const handleWheelMovement = (event: React.WheelEvent): void => {
        if (event.cancelable) {
            event.preventDefault();
        }

        let items = trendingItems.current;

        if (!items || typeof items === 'undefined') {
            return;
        }

        requestAnimationFrame(() => {
            if (items) {
                items.scrollLeft += event.deltaY;
            }
        });
    };

    /**
     * @description Prevent the body from scrolling when the user enters the trending area
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent} event
     * @return {void}
     */
    const handleWheelEnter = (event: React.MouseEvent): void => {
        let bodyElement = window.document.body;

        bodyElement.style.overflowY = 'hidden';
    }

    /**
     * @description Allow the body to scroll when the user leaves the trending area
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.MouseEvent} event
     * @return {void}
     */
    const handleWheelLeave = (event: React.MouseEvent): void => {
        let bodyElement = window.document.body;

        bodyElement.style.overflowY = 'inherit';
    }

    return (
        <div className="Trending" ref={ trending }>
            <h2 className="Content-header header-l">Trending</h2>

            <section id="Trending-items"
                     ref={trendingItems}
                     className="Trending-items"
                     onWheel={ (e) => { handleWheelMovement(e) } }
                     onMouseEnter={ (e) => { handleWheelEnter(e) } }
                     onMouseLeave={ (e) => { handleWheelLeave(e) } }
            >
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
