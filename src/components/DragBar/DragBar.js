import React, { Component } from 'react';

class DragBar extends Component {
    constructor(props) {
        super(props);
    }

    renderBarValues(valuesArr) {
        return (
            valuesArr.map((value, i) => (
                <span className='dragBar__checkpoint' key={i}>{value}</span>
            ))
        );
    }

    // onTouchStart = (evt) => {
    //     let touchObj = evt.changedTouches[0];
    //     this.startX = touchObj.clientX;
    // };

    // onTouchMove = (evt) => {
    //     let touchObj = evt.changedTouches[0];
    //
    //     let shift = {
    //         x: this.startX - touchObj.clientX
    //     };
    //
    //     let pinCoord = touchObj.target.offsetLeft - shift.x;
    //
    //     pinCoord = (pinCoord <= this.PIN_MIN_COORDS) ? this.PIN_MIN_COORDS + 'px' : pinCoord;
    //     pinCoord = (pinCoord >= this.PIN_MAX_COORDS) ? this.PIN_MAX_COORDS + 'px' : pinCoord;
    //
    //     this.setState({ pinCoord });
    //     this.startX = touchObj.clientX;
    // };

    // onTouchEnd = (evt) => {
    //     let touchObj = evt.changedTouches[0];
    //     let pinCoord = touchObj.target.offsetLeft;
    //     let minDistance = pinCoord;
    //     let currentPage = 0;
    //
    //     this.checkpointCoords.forEach((item, i) => {
    //         let currentDistance = Math.abs(pinCoord - item);
    //
    //         currentPage = (currentDistance < minDistance) ? i + 1 : currentPage;
    //         minDistance = (currentDistance < minDistance) ? currentDistance : minDistance;
    //     });
    //
    //     pinCoord = (currentPage === 0) ? 0 : this.checkpointCoords[currentPage - 1];
    //     this.setState({ pinCoord });
    // };


    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps');
    //     console.log('props', props);
    //     console.log('state', state);
    //
    //     return null;
    // }

    render() {
        let { pinCoord, onBarTouchStart, onBarTouchMove, onBarTouchEnd } = this.props;

        let position = pinCoord + 'px';
        let pinStyles = { left: position };
        let valueStyles = {
            width: position
        };

        return (
            <div className='dragBar'>
                <div className='dragBar__line'>
                    <div className='dragBar__pin'
                         style={pinStyles}
                         onTouchStart={onBarTouchStart}
                         onTouchMove={onBarTouchMove}
                         onTouchEnd={onBarTouchEnd}
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
