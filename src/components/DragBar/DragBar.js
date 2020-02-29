import React, { Component } from 'react';

class Bar extends Component {
    constructor(props) {
        super(props);
    }

    renderBarValues(valuesArr) {
        return (
            valuesArr.map((value, i) => (
                <span className='bar__checkpoint' key={i}>{value}</span>
            ))
        );
    }

    render() {
        let position = `50%`;

        let pinStyles = {
            left: position
        };

        let valueStyles = {
            width: position
        };

        return (
            <div className='bar'>
                <div className='bar__line'>
                    <div className='bar__pin' style={pinStyles}/>
                    <div className='bar__value' style={valueStyles}/>
                </div>
                <div className='bar__checkpoints'>
                    {this.renderBarValues(this.props.checkpoints)}
                </div>
            </div>
        );
    }
}

export default Bar;
