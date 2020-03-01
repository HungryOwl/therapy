import React, { Component } from 'react';

class DragBar extends Component {
    constructor(props) {
        super(props);

        let { barWidth, maxPage, currentPage, onTouchEnd } = this.props;

        this.PIN_MAX_COORDS = barWidth; // максимальные координаты ползунка
        this.PIN_MIN_COORDS = 0;        // минимальные координаты ползунка

        this.state = { pinCoord: this.PIN_MAX_COORDS / maxPage * currentPage };
        this.checkpointCoords = [];

        Array(maxPage).fill('').forEach((item, i) => (
            this.checkpointCoords[i] = (barWidth / maxPage) * (i + 1)
        ));
    }

    renderBarValues(valuesArr) {
        return (
            valuesArr.map((value, i) => (
                <span className='dragBar__checkpoint' key={i}>{value}</span>
            ))
        );
    }

    onTouchStart = (evt) => {
        let touchObj = evt.changedTouches[0];
        this.startX = touchObj.clientX;
    };

    onTouchMove = (evt) => {
        let touchObj = evt.changedTouches[0];

        // смещение
        let shift = {
            x: this.startX - touchObj.clientX
        };

        let pinCoord = touchObj.target.offsetLeft - shift.x;

        pinCoord = (pinCoord <= this.PIN_MIN_COORDS) ? this.PIN_MIN_COORDS + 'px' : pinCoord;
        pinCoord = (pinCoord >= this.PIN_MAX_COORDS) ? this.PIN_MAX_COORDS + 'px' : pinCoord;

        this.setState({ pinCoord });
        this.startX = touchObj.clientX;
    };

    onTouchEnd = (evt) => {
        let touchObj = evt.changedTouches[0];
        let pinCoord = touchObj.target.offsetLeft;
        let minDistance = pinCoord;
        let currentPage = 0;

        this.checkpointCoords.forEach((item, i) => {
            let currentDistance = Math.abs(pinCoord - item);

            currentPage = (currentDistance < minDistance) ? i + 1 : currentPage;
            minDistance = (currentDistance < minDistance) ? currentDistance : minDistance;
        });

        console.log('currentPage', currentPage);

        pinCoord = (currentPage === 0) ? 0 : this.checkpointCoords[currentPage - 1];
        this.setState({ pinCoord });
    };

    render() {
        let position = this.state.pinCoord + 'px';

        let pinStyles = { left: position };

        let valueStyles = {
            width: position
        };

        return (
            <div className='dragBar'>
                <div className='dragBar__line'>
                    <div className='dragBar__pin'
                         style={pinStyles}
                         onTouchStart={this.onTouchStart}
                         onTouchMove={this.onTouchMove}
                         onTouchEnd={this.onTouchEnd}
                    />
                    <div className='dragBar__value' style={valueStyles}/>
                </div>
                <div className='dragBar__checkpoints'>
                    {this.renderBarValues(this.props.checkpoints)}
                </div>
            </div>
        );
    }
}

export default DragBar;
