import React, { Component } from 'react';
import Swipedown from './SwipeDown';

const text = ['Гипогликемия', 'Осложнения СД', 'Цель по HbA1c', 'СС риски'];

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

    render() {
        return [
            <h2 className='slide__title' key={1}>
                Всегда ли цели терапии СД2
                на&nbsp;поверхности?
            </h2>,
            this.renderText(text),
            <Swipedown/>
        ];
    }
}

export default Goals;
