import React from 'react';
import Slide from '../Slide/Slide'
import Goals from '../Slide/Goals'
import Therapy from '../Slide/Therapy'
import Pagination from '../Pagination'
import BarSlider from '../BarSlider/BarSlider'
import { ValueRange } from '../utils'
import Swipable from '../Swipable/Swipable';
import Swipedown from '../Slide/SwipeDown';

class Slider extends Swipable {
    constructor(props) {
        super(props);
        this.state = { currentPage: 2 };
        this.sliderClasses = props.sliderClasses;
        this.pageRange = new ValueRange(0, this.sliderClasses.length - 1);

        this.sliderContent = {
            0: <Goals/>,
            1: <Therapy/>,
            2: <BarSlider initialPage={0} sliderClasses={['1988', '2009', '2016']} barWidth={640}/>
        };
    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    set currentPage(value) {
        this.setState({ currentPage: value });
    }

    swipeUp() {
        this.currentPage = this.pageRange.limit(this.currentPage + 1);
    }

    swipeDown() {
        this.currentPage = this.pageRange.limit(this.currentPage - 1);
    }

    renderSlides(slideArr, slideContent) {
        return (
            slideArr.map((slideType, i) => (
                <Slide key={i} slideType={slideType} isActive={this.state.currentPage === i}>{slideContent[i]}</Slide>
            ))
        );
    }

    renderSwipedown() {
        return (
            <Swipedown isActive={this.state.currentPage < this.maxPage}/>
        )
    }

    onPaginationItemClick = (currentPage) => () => {
        this.setState({ currentPage });
    };

    render() {
        const sliderStyle = {
            transform: `translateY(${-this.state.currentPage * 100}%)`,
        };

        return (
            <div className='slider'>
                <div className='slider__content'
                     onTouchStart={this.onTouchStart}
                     onTouchEnd={this.onTouchEnd}
                     style={sliderStyle}>

                    {this.renderSlides(this.sliderClasses, this.sliderContent)}
                </div>
                {this.renderSwipedown()}
                <Pagination amount={this.pageRange.max + 1} activeNumber={this.state.currentPage} onClick={this.onPaginationItemClick}/>
            </div>
        );
    }
}

export default Slider;
