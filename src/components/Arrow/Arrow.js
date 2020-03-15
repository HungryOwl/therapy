import React from 'react';

const Arrow = ({ width, deg, shiftX, shiftY }) => {
    let styles = {
        width: width + 'px',
        transform: `rotate(${deg}deg) translate(${shiftX}px, ${shiftY}px)`
    };

    return (
        <div className="arrow" style={styles}/>
    );
};

export default Arrow;
