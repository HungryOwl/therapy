import React, { Component } from 'react';
import Slide from '../Slide/Slide'
import DragBar from '../DragBar/DragBar'

class BarSlider extends Component {
    constructor(props) {
        super(props);

        const { sliderClasses } = this.props;

        this.barWidth = this.props.barWidth;

        this.initialPage = 0;
        this.sliderClasses = sliderClasses;
        this.maxPage = this.sliderClasses.length - 1;

        this.PIN_MIN_COORDS = 0;
        this.PIN_MAX_COORDS = this.barWidth;

        this.state = {
            currentPage: this.initialPage,
            pinCoord: this.pageDistance * this.initialPage
        };

        this.sliderContent = {
            0: 'первый горизонтальный слайд',
            1: 'второй горизонтальный слайд',
            2: 'третий горизонтальный слайд'
        };

        this.options = {
            isAnimationAvailable: true,
            initialPinCoord: this.state.pinCoord,

            // Свойства, нужные извне
            currentPage: this.currentPage,
            pageDistance: this.pageDistance,

            // Длительность анимации в мс
            duration: 300,

            // Расстояние, которое нужно пройти объекту анимации
            distance: 0,

            // Функция для пересчета исходного состояния анимации timefraction в итоговое progress
            timingCirc: this.circEaseOut,

            /**
             * Получаем x-координату объекта в конкретном кадре анимации,
             * соответствующему входному значению параметра анимации progress
             * @param {number} progress конечное значение состояния анимации,
             *                           пересчитанное нужной функцией изинга (вроде expo, circ и т.д.)
             */
            getCurrentXCoord: function(progress) {
                return this.initialPinCoord - progress * this.distance;
            }
        }
    }

    get currentPage() {
        let { currentPage } = this.state;
        return currentPage;
    }

    get pageDistance() {
        return this.PIN_MAX_COORDS / this.maxPage;
    }

    // @TODO вынести в отдельный файл типа utils
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
        let pinCoord = touchObj.target.offsetLeft - shiftX;

        pinCoord = this.limitToRange(pinCoord, this.PIN_MIN_COORDS, this.PIN_MAX_COORDS);
        let currentPage = Math.round(pinCoord / this.pageDistance);

        this.setState({ currentPage, pinCoord });
        this.startX = touchObj.clientX;
    };

    onBarTouchEnd = (evt) => {
        let touchObj = evt.changedTouches[0];
        let currentPinCoord = touchObj.target.offsetLeft;
        let resultPage, resultPinCoord, pinDistance;

        resultPage = Math.round(currentPinCoord / this.pageDistance);
        resultPinCoord = this.pageDistance * resultPage;

        pinDistance = currentPinCoord - resultPinCoord;

        this.options.initialPinCoord = currentPinCoord;
        this.options.distance = pinDistance;

        this.renderPinAnimation(this.options, this);
    };

    /**
     * Рассчет параметра отрисовки объекта на экране с помощью функции дуги
     * (progress = 1 - Math.sin(Math.acos(timeFraction)))
     * @param  {number} timeFraction входное значение состояния анимации
     * @return {number}              выходное (рассчетное) значение состояния анимации
     */
    circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
    }

    /**
     * Анимация типа easeOut, принимает функцию расчёта времени и возрващает преобразованный вариант
     * @return {Function} timing функция расчёта времени
     */
    makeEaseOut(timing) {
        return function(timeFraction) {
            return 1 - timing(1 - timeFraction);
        }
    }

    circEaseOut = this.makeEaseOut(this.circ);

    renderPinAnimation(options, context) {
        // Стартовое время
        let start = performance.now();
        let progress;

        // Запуск кадра анимации, time - время, прошедшее с начала загрузки страницы
        requestAnimationFrame(function animateFrame(time) {
            /**
             * Состояние объекта, отвечающее за возможность начать проигрывать следующую анимацию
             * @type {Boolean} false - нельзя запускать следующую анимацию
             *                 true  - можно запускать следующую анимацию
             */
            options.isAnimationAvailable = false;

            let timeFromStart = time - start;

            // timeFraction - от 0 до 1 - состояние анимации = текущее время - время старта в мс / длительность анимации
            let timeFraction = timeFromStart / options.duration;

            timeFraction = context.limitToRange(timeFraction, 0, 1);

            // перерасчет значений timeFraction для получения новых значений,
            // соответствующих функциям типа circ, expo и т.д.
            progress = options.timingCirc(timeFraction);

            // получаем нужные координаты пина и рисуем его на странице
            let pinCoord = options.getCurrentXCoord(progress, timeFraction);
            context.setState({ pinCoord });

            if (timeFraction < 1) {
                requestAnimationFrame(animateFrame);
            } else {
                // После окончания анимации обновляем начальные координаты пина
                options.initialPinCoord = options.pageDistance * options.currentPage;

                // Анимация объекта закончилась, можно начинать следующую
                options.isAnimationAvailable = true;
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
