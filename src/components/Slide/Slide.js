import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={`slide slide--${this.props.slideType}`}>
                Тело слайда
            </section>
        );
    }
}

export default Slider;
