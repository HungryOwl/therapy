import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <section className={`slide slide--${this.props.slideType}`}>
                {children}
            </section>
        );
    }
}

export default Slider;
