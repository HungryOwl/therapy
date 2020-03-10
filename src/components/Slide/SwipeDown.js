import React from 'react';
import cn from "classnames";

 const SwipeDown = ({ isActive }) => {
     const swipeDownClasses = cn({
         'swipeDown': true,
         'swipeDown--active': isActive
     });

    return (
        <section className={swipeDownClasses}>
            <span className='swipeDown__text'>Листайте вниз</span>
        </section>
    );
};

export default SwipeDown;
