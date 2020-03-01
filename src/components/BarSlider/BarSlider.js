import React, { Component } from 'react';
import Slide from '../Slide/Slide'
import DragBar from '../DragBar/DragBar'

class BarSlider extends Component {
    constructor() {
        super();

        this.state = { currentPage: 2 };

        this.minPage = 0;
        this.maxPage = 2;

        this.sliderContent = {
            0: 'первый диагональный слайд',
            1: 'второй диагональный слайд',
            2: 'третий'
        };

        this.sliderClasses = ['1988', '2009', '2016'];
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

    onTouchEnd = (evt) => {

    };

    renderSlides(slideArr) {
        return (
            slideArr.map((slideType, i) => (
                <Slide key={i} slideType={slideType}>{this.sliderContent[i]}</Slide>
            ))
        );
    }

    render() {
        let currentPos = this.state.currentPage * -100;

        const sliderStyle = {
            transform: `translateX(${currentPos}%)`,
        };

        return (
            <div className='slider'>
                <div className='slider__content slider__content--horizontal'  style={sliderStyle}>
                    {this.renderSlides(this.sliderClasses, this.sliderContent)}
                </div>
                <DragBar
                    barWidth='640'
                    checkpoints={this.sliderClasses}
                    maxPage={this.sliderClasses.length - 1}
                    currentPage={this.state.currentPage}
                />
            </div>
        );
    }
}

export default BarSlider;
