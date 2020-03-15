import React, { Component } from 'react';
import Slider from './Slider/Slider'

class App extends Component {
    render() {
        return (
            <Slider sliderClasses={['goals', 'therapy', 'details']}/>
        );
    }
}

export default App;
