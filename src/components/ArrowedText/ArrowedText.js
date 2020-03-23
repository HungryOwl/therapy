import React, { Component } from 'react';
import Arrow from '../Arrow/Arrow';

class ArrowedText extends Component {
    constructor(props) {
        super(props);
    }

    renderArrow(arrowOpts) {
        return <Arrow {...arrowOpts}/>;
    }

    renderArrows(arrowsArr) {
        return arrowsArr.map((options, i) => <Arrow {...options} key={i}/>)
    }

    render() {
        return (
            <div className={this.props.classes}>
                <span>{this.props.text}</span>
                {this.props.arrow && this.renderArrow(this.props.arrow)}
                {this.props.arrows && this.renderArrows(this.props.arrows)}
            </div>
        );
    }
}

export default ArrowedText;
