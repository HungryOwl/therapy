import React, { Component } from 'react';
import cn from "classnames";

class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, slideType, isActive } = this.props;
        const slideClasses = cn({
            'slide': true,
            'slide--active': isActive,
            [`slide--${slideType}`]: true
        });

        return (
            <section className={slideClasses}>
                { children }
            </section>
        );
    }
}

export default Slider;
