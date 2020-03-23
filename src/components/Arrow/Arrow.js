import React from 'react';

const Arrow = ({ length, deg = 0, shiftX = 0, shiftY = 0 }) => {
    let styles = {
        width: length + 'px',
        transform: `rotate(${deg}deg) translate(${shiftX}px, ${shiftY}px)`
    };

    return <div className="arrow" style={styles}/>;
};

export default Arrow;
