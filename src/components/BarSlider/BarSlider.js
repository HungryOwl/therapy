import React, { Component } from 'react';
import { ValueRange } from '../utils'
import Slide from '../Slide/Slide'
import DragBar from '../DragBar/DragBar'
import Pathogenesis1998 from '../Slide/Pathogenesis1998';
import Pathogenesis2009 from '../Slide/Pathogenesis2009';
import Animation from '../Animation/animation'
import { CircAnimation, ReverseAnimation } from '../Animation/animationTypes'
import Pathogenesis2016 from "../Slide/Pathogenesis2016";

class BarSlider extends Component {
    constructor(props) {
        super(props);
        const { initialPage } = this.props;

        this.barWidth = this.props.barWidth;
        this.sliderClasses = this.props.sliderClasses;

        this.pageRange = new ValueRange(0, this.sliderClasses.length - 1);
        this.pinCoordsRange = new ValueRange(0, this.barWidth);

        this.barClientX = null;

        this.state = {
            currentPage: initialPage,
            pinCoord: this.pageDistance * initialPage
        };

        this.sliderContent = {
            0: <Pathogenesis1998/>,
            1: <Pathogenesis2009/>,
            2: <Pathogenesis2016/>
        };

        this.options = {
            // Стартовые координаты пина
            initialPinCoord: this.state.pinCoord,

            // Длительность анимации в мс
            duration: 300,

            // Расстояние, которое нужно пройти объекту анимации
            distance: 0
        };

        console.log(this);
    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    get pageDistance() {
        return this.pinCoordsRange.max / this.pageRange.max;
    }

    // @TODO эти методы нужно отрефакторить;
    onBarTouchStart = (evt) => {
        let touchObj = evt.changedTouches[0];
        this.startX = touchObj.clientX;

        if (evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value') {
            this.barClientX = (this.barClientX) ? this.barClientX : evt.currentTarget.getBoundingClientRect().x;
            let pinCoord = this.startX - this.barClientX;
            this.setState({ pinCoord });
        }
    };

    onBarTouchMove = (evt) => {
        let pinCoord;
        let touchObj = evt.changedTouches[0];
        let shiftX = this.startX - touchObj.clientX;

        if (evt.target.className === 'dragBar__pin') {
            pinCoord = this.pinCoordsRange.limit(touchObj.target.offsetLeft - shiftX);
        }

        if (evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value') {
            let pinCoord = this.pinCoordsRange.limit(this.startX - evt.currentTarget.getBoundingClientRect().x - shiftX);
        }

        let currentPage = Math.round(pinCoord / this.pageDistance);
        this.setState({ currentPage, pinCoord });
        this.startX = touchObj.clientX;
    };

    onBarTouchEnd = (evt) => {
        let currentPinCoord;

        if (evt.target.className === 'dragBar__pin') {
            let touchObj = evt.changedTouches[0];
            currentPinCoord = touchObj.target.offsetLeft;
        }

        if (evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value') {
            currentPinCoord = this.state.pinCoord;
        }

        let resultPage = Math.round(currentPinCoord / this.pageDistance);
        let resultPinCoord = this.pageDistance * resultPage;

        this.options.distance = currentPinCoord - resultPinCoord;
        this.options.initialPinCoord = currentPinCoord;

        if (evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value') {
            this.setState({ currentPage: resultPage });
        }

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
            slideArr.map((slideType, i) => <Slide key={i} slideType={slideType}>{this.sliderContent[i]}</Slide>)
        );
    }

    render() {
        let sliderPos = this.currentPage * -100;

        const sliderStyle = {
            transform: `translateX(${sliderPos}%)`,
        };

        return (
            <div className='slider'>
                <div className='slider__content slider__content--horizontal' style={sliderStyle}>
                    {this.renderSlides(this.sliderClasses, this.sliderContent)}
                </div>

                <DragBar
                    checkpoints={this.sliderClasses}
                    pinCoord={this.state.pinCoord}
                    barWidth={this.barWidth}
                    onBarTouchStart={this.onBarTouchStart}
                    onBarTouchMove={this.onBarTouchMove}
                    onBarTouchEnd={this.onBarTouchEnd}
                />
            </div>
        );
    }
}

export default BarSlider;
