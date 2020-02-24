import React, { Component } from 'react';
import Slide from '../Slide/Slide'

class Slider extends Component {
    constructor(props) {
        super(props);

        this.startX = null;                 // координата Х начального касания экрана
        this.startY = null;                 // координата Y начального касания экрана
        this.distX = null;                  // пройденная дистанция пальца по оси X
        this.distY = null;                  // пройденная дистанция пальца по оси Y
        this.distXThreshold = 100;   // минимальное расстояние прохода пальца по оси Х для swipe
        this.distYThreshold  = 100;  // минимальное расстояние прохода пальца по оси Y для swipe
        this.timeThreshold = 300;    // контрольное время прохождения нужного расстояния
        this.ellapsedTime = null;           // пройденное время
        this.startTime = null;              // время начального касания экрана
        this.swipeDirection = null;  // направление движения свайпа (вверх - top, вниз - bottom, вправо - right, влево - left)

        this.onSwipe = {
            left: () => console.log('left'),
            right: () => console.log('right'),
            top: () => console.log('top'),
            bottom: () => console.log('bottom')
        }
    }

    componentDidMount() {

    }

    onTouchStart = (evt) => {
        let touchObj = evt.changedTouches[0];

        this.distX = 0;
        this.distY = 0;
        this.startX = touchObj.pageX;
        this.startY = touchObj.pageY;

        // время контакта с поверхностью сенсора
        this.startTime = new Date().getTime();
    };

    onTouchEnd = (evt) => {
        let touchObj = evt.changedTouches[0];
        let isEllapsedTimeCorrect;

        // пройденная дистанция
        this.distX = touchObj.pageX - this.startX;
        this.distY = touchObj.pageY - this.startY;

        // пройденное время
        this.ellapsedTime = new Date().getTime() - this.startTime;
        isEllapsedTimeCorrect = this.ellapsedTime <= this.timeThreshold;

        if (isEllapsedTimeCorrect && (this.distX < 0) && (Math.abs(this.distX) >= this.distXThreshold) && (Math.abs(this.distX) > Math.abs(this.distY)) && (Math.abs(this.distY) <= this.distYThreshold)) {
            this.swipeDirection = 'left';
        }

        if (isEllapsedTimeCorrect && (this.distX > 0) && (this.distX >= this.distXThreshold) && (this.distX > Math.abs(this.distY)) && (Math.abs(this.distY) <= this.distYThreshold)) {
            this.swipeDirection = 'right';
        }

        if (isEllapsedTimeCorrect && (this.distY < 0) && (Math.abs(this.distY) >= this.distYThreshold) && (Math.abs(this.distY) > Math.abs(this.distX)) && (Math.abs(this.distX) <= this.distXThreshold)) {
            this.swipeDirection = 'top';
        }

        if (isEllapsedTimeCorrect && (this.distY > 0) && (this.distY >= this.distYThreshold) && (this.distY > Math.abs(this.distX)) && (Math.abs(this.distX) <= this.distXThreshold)) {
            this.swipeDirection = 'bottom';
        }

        if (!this.swipeDirection) {
            return;
        }

        this.onSwipe[this.swipeDirection]();
        this.swipeDirection = null;
    };

    render() {
        return (
            <div className='slider'
                 onTouchStart={this.onTouchStart}
                 onTouchEnd={this.onTouchEnd}
            >
                <Slide/>
                <Slide/>
                <Slide/>
            </div>
        );
    }
}

export default Slider;
