import React, { Component } from 'react';
import Swipedown from './SwipeDown';
import BulbGroup from '../BulbGroup/BulbGroup';

const textArr = ['Гипогликемия', 'Осложнения СД', 'Цель по HbA1c', 'СС риски'];
// const bulbSizeArr = [28, 17, 54, 17];

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
                <BulbGroup key={i} modificator={i}/>
            ))
        );
    }

    render() {
        return [
            <h2 className='slide__title' key={1}>Всегда ли цели терапии СД2 на&nbsp;поверхности?</h2>,
            this.renderText(textArr),
            this.renderBulbs(4),
            <Swipedown/>
        ];
    }
}

export default Goals;
