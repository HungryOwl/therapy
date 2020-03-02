import React, { Component } from 'react';
import Slide from '../Slide/Slide'
import DragBar from '../DragBar/DragBar'

class BarSlider extends Component {
    constructor() {
        super();

        this.initialPage = 0;
        this.sliderClasses = ['1988', '2009', '2016'];
        this.maxPage = this.sliderClasses.length - 1;

        this.barWidth = 640;
        this.PIN_MIN_COORDS = 0;
        this.PIN_MAX_COORDS = this.barWidth;

        this.state = { currentPage: this.initialPage , pinCoord: this.pageDistance * this.initialPage };

        this.sliderContent = {
            0: 'первый горизонтальный слайд',
            1: 'второй горизонтальный слайд',
            2: 'третий горизонтальный слайд'
        };
    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    get pageDistance() {
        return this.PIN_MAX_COORDS / this.maxPage;
    }

    onBarTouchStart = (evt) => {
        let touchObj = evt.changedTouches[0];
        this.startX = touchObj.clientX;
    };

    onBarTouchMove = (evt) => {
        let touchObj = evt.changedTouches[0];

        let shift = {
            x: this.startX - touchObj.clientX
        };

        let pinCoord = touchObj.target.offsetLeft - shift.x;

        pinCoord = (pinCoord <= this.PIN_MIN_COORDS) ? this.PIN_MIN_COORDS + 'px' : pinCoord;
        pinCoord = (pinCoord >= this.PIN_MAX_COORDS) ? this.PIN_MAX_COORDS + 'px' : pinCoord;

        let currentPage = Math.round(pinCoord / this.pageDistance);

        this.setState({ currentPage, pinCoord });
        this.startX = touchObj.clientX;
    };

    onBarTouchEnd = (evt) => {
        let touchObj = evt.changedTouches[0];
        let pinCoord = touchObj.target.offsetLeft;
        let currentPage;

        currentPage = Math.round(pinCoord / this.pageDistance);
        pinCoord = this.pageDistance * currentPage;

        this.setState({ currentPage, pinCoord });
    };

    renderSlides(slideArr) {
        return (
            slideArr.map((slideType, i) => (
                <Slide key={i} slideType={slideType}>{this.sliderContent[i]}</Slide>
            ))
        );
    }

    render() {
        let currentPos = this.currentPage * -100;

        const sliderStyle = {
            transform: `translateX(${currentPos}%)`,
        };

        return (
            <div className='slider'>
                <div className='slider__content slider__content--horizontal'  style={sliderStyle}>
                    {this.renderSlides(this.sliderClasses, this.sliderContent)}
                </div>
                <DragBar
                    checkpoints={this.sliderClasses}
                    pinCoord={this.state.pinCoord}
                    onBarTouchStart={this.onBarTouchStart}
                    onBarTouchMove={this.onBarTouchMove}
                    onBarTouchEnd={this.onBarTouchEnd}
                />
            </div>
        );
    }
}

export default BarSlider;
