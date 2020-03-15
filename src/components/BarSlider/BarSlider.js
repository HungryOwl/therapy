import React, { Component } from 'react';
import { ValueRange } from '../utils'
import Slide from '../Slide/Slide'
import DragBar from '../DragBar/DragBar'
import PathogenesisLinks from '../Slide/PathogenesisLinks';
import Animation from '../Animation/animation'
import { CircAnimation, ReverseAnimation } from '../Animation/animationTypes'

class BarSlider extends Component {
    constructor(props) {
        super(props);
        const { initialPage } = this.props;

        this.barWidth = this.props.barWidth;
        this.sliderClasses = this.props.sliderClasses;

        this.pageRange = new ValueRange(0, this.sliderClasses.length - 1);
        this.pinCoordsRange = new ValueRange(0, this.barWidth);


        this.PIN_MIN_COORDS = 0;
        this.PIN_MAX_COORDS = this.barWidth;

        this.state = {
            currentPage: initialPage,
            pinCoord: this.pageDistance * initialPage
        };

        this.sliderContent = {
            0: <PathogenesisLinks/>,
            1: 'второй горизонтальный слайд',
            2: 'третий горизонтальный слайд'
        };

        this.options = {
            // Стартовые координаты пина
            initialPinCoord: this.state.pinCoord,

            // Длительность анимации в мс
            duration: 300,

            // Расстояние, которое нужно пройти объекту анимации
            distance: 0
        }
    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    get pageDistance() {
        return this.PIN_MAX_COORDS / this.pageRange.max;
    }

    limitToRange(value, lowerBound, upperBound) {
        if (value < lowerBound) return lowerBound;
        if (value > upperBound) return upperBound;
        return value;
    }

    onBarTouchStart = (evt) => {
        let touchObj = evt.changedTouches[0];
        this.startX = touchObj.clientX;
    };

    onBarTouchMove = (evt) => {
        let touchObj = evt.changedTouches[0];
        let shiftX = this.startX - touchObj.clientX;
        let pinCoord = this.pinCoordsRange.limit(touchObj.target.offsetLeft - shiftX);
        let currentPage = Math.round(pinCoord / this.pageDistance);

        this.setState({ currentPage, pinCoord });
        this.startX = touchObj.clientX;
    };

    onBarTouchEnd = (evt) => {
        let touchObj = evt.changedTouches[0];
        let currentPinCoord = touchObj.target.offsetLeft;
        let resultPage, resultPinCoord;

        resultPage = Math.round(currentPinCoord / this.pageDistance);
        resultPinCoord = this.pageDistance * resultPage;

        this.options.distance = currentPinCoord - resultPinCoord;
        this.options.initialPinCoord = currentPinCoord;

        this.renderPinAnimation();
    };

    makeEaseOutAnimation() {
        return new ReverseAnimation(new CircAnimation(new ReverseAnimation(new Animation(this.options.duration))));
    }

    renderPinAnimation() {
        if (this.animation) return;

        this.animation = this.makeEaseOutAnimation();

        let self = this,
            options = this.options;

        this.animation.animate({
            from: options.initialPinCoord,
            to: options.initialPinCoord - options.distance,
            onAnimationFrame(pinCoord) {
                self.setState({ pinCoord });
            },
            onAnimationFinish() {
                options.initialPinCoord = self.pageDistance * self.currentPage;
                self.animation = null;
            }
        });
    }

    renderSlides(slideArr) {
        return (
            slideArr.map((slideType, i) => (
                <Slide key={i} slideType={slideType}>{this.sliderContent[i]}</Slide>
            ))
        );
    }

    render() {
        let sliderPos = this.currentPage * -100;

        const sliderStyle = {
            transform: `translateX(${sliderPos}%)`,
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
                    barWidth={this.barWidth}
                />
            </div>
        );
    }
}

export default BarSlider;
