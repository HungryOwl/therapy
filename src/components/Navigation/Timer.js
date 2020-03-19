import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(2020, 0, 1, 0, props.minutes, 0, 0)};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    get isTimeOver() {
        return this.seconds === 0 && this.minutes === 0;
    }

    get minutes() {
        return this.state.date.getMinutes();
    }

    get seconds() {
        return this.state.date.getSeconds();
    }

    set seconds(value) {
        let currentDate = this.state.date;
        currentDate.setSeconds(value);
        this.setState({ date: currentDate });
    }

    tick() {
        this.seconds--;
        if (this.isTimeOver) clearInterval(this.timerID);
    }

    pad(value) {
        const digits = '' + value;
        return '00'.substring(digits.length) + digits;
    }

    render() {
        const currentTime = this.minutes + ':' + this.pad(this.seconds);

        return [
            <span className='timer'>{currentTime}</span>
        ];
    }
}
