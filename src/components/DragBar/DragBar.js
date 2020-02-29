import React, { Component } from 'react';

class DragBar extends Component {
    constructor(props) {
        super(props);

        let { maxPage, currentPage } = this.props;

        this.PIN_MAX_COORDS = 640; // максимальные координаты ползунка
        this. PIN_MIN_COORDS = 0; // минимальные координаты ползунка

        this.state = { pinCoord: this.PIN_MAX_COORDS / maxPage * currentPage };
    }

    renderBarValues(valuesArr) {
        return (
            valuesArr.map((value, i) => (
                <span className='bar__checkpoint' key={i}>{value}</span>
            ))
        );
    }

    onTouchStart = (evt) => {
        let touchObj = evt.changedTouches[0];

        this.startX = touchObj.clientX;
    };

    onTouchMove = (evt) => {
        let touchObj = evt.changedTouches[0];
        console.log('onTouchMove');

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

    render() {
        let position = this.state.pinCoord + 'px';

        let pinStyles = {
            left: position
        };

        let valueStyles = {
            width: position
        };

        return (
            <div className='dragBar'>
                <div className='dragBar__line'>
                    <div className='dragBar__pin' style={pinStyles} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove}/>
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
