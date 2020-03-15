import { Component } from 'react';
import { Axis } from '../utils';

class Swipable extends Component {
    constructor() {
        super();
        this.x = new Axis(100);             // минимальное расстояние прохода пальца по оси Х для swipe
        this.y = new Axis(100);             // минимальное расстояние прохода пальца по оси Y для swipe
        this.time = new Axis(300);          // контрольное время прохождения нужного расстояния
    }

    setCoordinates(evt) {
        this.x.start(evt.changedTouches[0].pageX);
        this.y.start(evt.changedTouches[0].pageY);
        this.time.start(performance.now());
    };

    updateCoordinates(evt) {
        this.x.update(evt.changedTouches[0].pageX);
        this.y.update(evt.changedTouches[0].pageY);
        this.time.update(performance.now());
    }

    get isFingerMoved() {
        return this.x.isOverThreshold ^ this.y.isOverThreshold;
    }

    get isHorizontalMove() {
        return this.x.distance > this.y.distance;
    }

    swipeUp() {
        console.log('swiped up');
    }

    swipeRight() {
        console.log('swiped right');
    }

    swipeDown() {
        console.log('swiped down');
    }

    swipeLeft() {
        console.log('swiped left');
    }

    onTouchStart = (evt) => {
        this.setCoordinates(evt);
    };

    onTouchEnd = (evt) => {
        this.updateCoordinates(evt);

        if (this.time.isUnderThreshold && this.isFingerMoved) {
            if (this.isHorizontalMove) {
                if (this.x.delta < 0) {
                    this.swipeLeft();
                } else {
                    this.swipeRight();
                }
            } else {
                if (this.y.delta < 0) {
                    this.swipeUp();
                } else {
                    this.swipeDown();
                }
            }
        }
    };
}

export default Swipable;
