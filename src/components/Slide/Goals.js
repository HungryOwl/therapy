import React, { Component } from 'react';
import BulbGroup from '../BulbGroup/BulbGroup';

const textArr = ['Гипогликемия', 'Осложнения СД', 'Цель по HbA1c', 'СС риски'];

class Goals extends Component {
    constructor(props) {
        super(props);
    }

    renderText(textArr) {
        return (
            textArr.map((text, i) => (
                <span className={`slide__text slide__text--${i}`} key={i}>{text}</span>
            ))
        );
    }

    renderBulbs(amount) {
        return (
            Array(amount).fill('').map((item, i) => (
                <BulbGroup modificator={i} key={i}/>
            ))
        );
    }

    render() {
        return [
            <h2 className='slide__title'>Всегда ли цели терапии СД2 на&nbsp;поверхности?</h2>,
            this.renderText(textArr),
            this.renderBulbs(4),
        ];
    }
}

export default Goals;
