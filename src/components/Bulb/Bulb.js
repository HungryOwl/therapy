import React from 'react';

const Bulb = (props) => {
    const { modificator } = props;
    
    return (
        <div className={`bulb bulb--${modificator}`}/>
    );
};

export default Bulb;
