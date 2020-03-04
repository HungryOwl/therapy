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

    render() {
        let { pinCoord, onBarTouchStart, onBarTouchMove, onBarTouchEnd } = this.props;

        let position = pinCoord + 'px';
        let barStyles = { width: this.props.barWidth + 'px' };
        let pinStyles = { left: position };
        let valueStyles = { width: position };

        return (
            <div className='dragBar' style={barStyles}>
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
