import React, { Component } from 'react';

export default class Countdown extends Component {
    constructor(props, minutes) {
        super(props);
        this.date = new Date(1970, 0, 1, 0, minutes, 0, 0);
    }

    tick() {
        this.seconds--;
        this.onTick();

        if (this.isTimeOver) {
            this.pause();
            this.onTimeOver();
        }
    }

    start() {
        if (!this.isTicking && !this.isTimeOver) {
            this.timerID = setInterval(
                () => this.tick(),
                1000
            );
            this.onToggle();
        }
    }

    pause() {
        if (this.isTicking) {
            clearInterval(this.timerID);
            this.timerID = null;
            this.onToggle();
        }
    }

    toggle() {
        if (this.isTicking) this.pause();
        else this.start();
    }

    get isTicking() {
        return !!this.timerID;
    }

    get isTimeOver() {
        return this.seconds === 0 && this.minutes === 0;
    }

    onTimeOver() {
        this.onStateChange();
        console.log('時間切れ');
    }

    onTick() {
        this.onStateChange();
        console.log('Time: ' + this.timerValue);
    }

    onToggle() {
        this.onStateChange();
        console.log('Ticking: ' + this.isTicking);
    }

    onStateChange() {
        this.setState({
            ticking: this.isTicking,
            time: this.timerValue,
            timeOver: this.isTimeOver
        });
    }

    get timerValue() {
        return this.minutes + ':' + this.pad(this.seconds);
    }

    get minutes() {
        return this.date.getMinutes();
    }

    get seconds() {
        return this.date.getSeconds();
    }

    set seconds(value) {
        this.date.setSeconds(value);
    }

    pad(value) {
        const digits = '' + value;
        return '00'.substring(digits.length) + digits;
    }
}
