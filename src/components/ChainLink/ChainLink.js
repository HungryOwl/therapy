import React, { Component } from 'react';
import cn from 'classnames';

class ChainLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='chainLink'>
                <div className='chainLink__image'/>
                <div className='chainLink__content'>
                    <div className='chainLink__index'>{this.props.index}</div>
                    <div className='chainLink__text'>{this.props.text}</div>
                </div>
            </article>
        );
    }
}

export default ChainLink;
