import React from 'react';
import Bulb from '../Bulb/Bulb';

const BulbGroup = (props) => {
    const { modificator } = props;

    return (
        <div className={`bulbGroup bulbGroup--${modificator}`}>
            <Bulb modificator="fixed"/>
            <Bulb modificator="moves"/>
            <Bulb modificator="moves"/>
        </div>
    );
};

export default BulbGroup;
