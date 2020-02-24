import React from 'react';
import cn from 'classnames'

const Item = ({ isActive, onClick }) => {
    const itemClasses = cn({
        pagination__item: true,
        'active': isActive
    });

    return (
        <li className={itemClasses} onClick={onClick}/>
    );
};

export default Item;
