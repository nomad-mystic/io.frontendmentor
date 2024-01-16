// Community
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './HomeCircle.css';

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @return {React.JSX.Element}
 */
const HomeCircle = (): React.JSX.Element => {
    return (
        <div className="HomeCircle-circle">
            <h3 className="Heading-4 HomeCircle-circleText">EXPLORE</h3>

            <Link to="/destination" className="HomeCircle-circleLink">
                <span className="HomeCircle-shape"></span>
                <span className="HomeCircle-shapeBackground"></span>
            </Link>
        </div>
    );
};

export default HomeCircle;
