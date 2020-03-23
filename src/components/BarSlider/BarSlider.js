import React, {Component} from 'react';
import {ValueRange} from '../utils'
import Slide from '../Slide/Slide'
import DragBar from '../DragBar/DragBar'
import Pathogenesis1998 from '../Slide/Pathogenesis1998';
import Pathogenesis2009 from '../Slide/Pathogenesis2009';
import Animation from '../Animation/animation'
import {CircAnimation, ReverseAnimation} from '../Animation/animationTypes'
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
    }

    get currentPage() {
        return Math.round(this.pinCoord / this.pageDistance);
    }

    get pinCoord() {
        return this.state.pinCoord;
    }

    set pinCoord(value) {
        this.setState({ pinCoord: this.pinCoordsRange.limit(value) });
    }

    get pageDistance() {
        return this.pinCoordsRange.max / this.pageRange.max;
    }

    // @TODO эти методы нужно отрефакторить;
    onBarTouchStart = (evt) => {
        const touchObj = evt.changedTouches[0];
        const isClickedOnLine = evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value';
        this.startX = touchObj.clientX;

        if (isClickedOnLine) {
            this.barClientX = (this.barClientX) ? this.barClientX : evt.currentTarget.getBoundingClientRect().x;
            this.pinCoord = this.startX - this.barClientX;
        }
    };

    onBarTouchMove = (evt) => {
        const touchObj = evt.changedTouches[0];
        const shiftX = this.startX - touchObj.clientX;
        const isClickedOnPin = evt.target.className === 'dragBar__pin';
        const isClickedOnLine = evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value';

        if (isClickedOnPin) this.pinCoord = touchObj.target.offsetLeft - shiftX;
        if (isClickedOnLine) this.pinCoord = this.startX - evt.currentTarget.getBoundingClientRect().x - shiftX;

        this.startX = touchObj.clientX;
    };

    onBarTouchEnd = (evt) => {
        const isClickedOnPin = evt.target.className === 'dragBar__pin';
        const isClickedOnLine = evt.target.className === 'dragBar__line' || evt.target.className === 'dragBar__value';

        if (isClickedOnPin) {
            const touchObj = evt.changedTouches[0];
            this.pinCoord = touchObj.target.offsetLeft;
        }

        if (isClickedOnLine) this.pinCoord = this.state.pinCoord;
        const targetPinCoord = this.pageDistance * this.currentPage;

        this.options.distance = this.pinCoord - targetPinCoord;
        this.options.initialPinCoord = this.pinCoord;

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
