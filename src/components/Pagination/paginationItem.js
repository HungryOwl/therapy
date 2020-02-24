import React from 'react';
import cn from 'classnames'

const PaginationItem = ({ isActive, pageNumber, onClick }) => {
    const itemClasses = cn({
        pagination__item: true,
        'active': isActive
    });

    return (
        <li className={itemClasses} onClick={onClick(pageNumber)}/>
    );
};

export default PaginationItem;
