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
        return this.state.date.getSeconds() === 0 && this.state.date.getMinutes() === 0
    }

    tick() {
        let currentDate = this.state.date;
        currentDate.setSeconds(currentDate.getSeconds() - 1);
        this.setState({ date: currentDate });
        if (this.isTimeOver) clearInterval(this.timerID);
    }

    pad(value) {
        const digits = '' + value;
        return '00'.substring(digits.length) + digits;
    }

    render() {
        const minutes = this.state.date.getMinutes(),
              seconds = this.state.date.getSeconds(),
              currentTime = minutes + ':' + this.pad(seconds);

        return <span className='timer'>{currentTime}</span>;
    }
}
