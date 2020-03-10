import React, { Component } from 'react';
import Swipedown from './SwipeDown';

class TherapyBasis extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h2 className='slide__title' key={1}>Основа терапии — патогенез СД2</h2>,
            <Swipedown key={2}/>
        ];
    }
}

export default TherapyBasis;
