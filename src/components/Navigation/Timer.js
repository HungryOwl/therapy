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

    tick() {
        let currentDate = this.state.date;
        currentDate.setSeconds(currentDate.getSeconds() - 1);

        this.setState({ date: currentDate });

        if (currentDate.getSeconds() === 0 && currentDate.getMinutes() === 0) clearInterval(this.timerID);
    }

    render() {
        const seconds = (this.state.date.getSeconds() < 10) ? '0' + this.state.date.getSeconds() : this.state.date.getSeconds();
        const currentTime = this.state.date.getMinutes() + ':' + seconds;

        return (
            <span className='timer'>{currentTime}</span>
        );
    }
}
