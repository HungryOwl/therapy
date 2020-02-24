import React, { Component } from 'react';
import Slide from '../Slide/Slide'
import Pagination from '../Pagination'

class Slider extends Component {
    constructor() {
        super();

        this.state = { currentPage: 0 };

        this.currentPage = 0;
        this.minPage = 0;
        this.maxPage = 2;

        this.startX = null;                 // координата Х начального касания экрана
        this.startY = null;                 // координата Y начального касания экрана
        this.distX = null;                  // пройденная дистанция пальца по оси X
        this.distY = null;                  // пройденная дистанция пальца по оси Y
        this.distXThreshold = 100;          // минимальное расстояние прохода пальца по оси Х для swipe
        this.distYThreshold  = 100;         // минимальное расстояние прохода пальца по оси Y для swipe
        this.timeThreshold = 300;           // контрольное время прохождения нужного расстояния
        this.ellapsedTime = null;           // пройденное время
        this.startTime = null;              // время начального касания экрана
        this.swipeDirection = null;         // направление движения свайпа (вверх - top, вниз - bottom, вправо - right, влево - left)

        this.onSwipe = {
            left: () => console.log('left'),
            right: () => console.log('right'),
            up: this.increaseCounter,
            down: this.decreaseCounter
        };

        this.sliderClasses = ['goals', 'therapy', 'details'];
    }

    componentDidMount() {

    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    set currentPage(value) {
        this.setState({ currentPage: value });
    }

    increaseCounter = () => {
        this.currentPage = (this.currentPage >= this.maxPage) ? this.maxPage : this.currentPage + 1;
    };

    decreaseCounter = () => {
        this.currentPage = (this.currentPage <= this.minPage) ? this.minPage : this.currentPage - 1;
    };

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
            this.swipeDirection = 'up';
        }

        if (isEllapsedTimeCorrect && (this.distY > 0) && (this.distY >= this.distYThreshold) && (this.distY > Math.abs(this.distX)) && (Math.abs(this.distX) <= this.distXThreshold)) {
            this.swipeDirection = 'down';
        }

        if (!this.swipeDirection) {
            return;
        }

        this.onSwipe[this.swipeDirection]();
        this.swipeDirection = null;
    };

    renderSlides(slideArr) {
        return (
            slideArr.map((slideType, i) => (
                <Slide key={i} slideType={slideType}/>
            ))
        );
    }

    onPaginationItemClick = (currentPage) => () => {
        this.setState({ currentPage });
    };

    render() {
        let currentPos = this.state.currentPage * -100;

        const sliderStyle = {
            transform: `translateY(${currentPos}%)`,
        };

        return (
            <div className='slider'>
                <div className='slider__content'
                     onTouchStart={this.onTouchStart}
                     onTouchEnd={this.onTouchEnd}
                     style={sliderStyle}>

                    {this.renderSlides(this.sliderClasses)}

                </div>
                <Pagination amount={this.maxPage + 1} activeNumber={this.state.currentPage} onClick={this.onPaginationItemClick}/>
            </div>
        );
    }
}

export default Slider;
