import React from 'react';

const Bulb = (props) => {
    const { modificator } = props;

    return (
        <div className={`bulb bulb--${modificator}`}>
            <div className="bulb__item bulb__item--gradient"/>
            <div className="bulb__item bulb__item--stroke"/>
        </div>
    );
};

export default Bulb;
