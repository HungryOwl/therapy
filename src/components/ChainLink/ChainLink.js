import React, { Component } from 'react';
import cn from 'classnames';

class ChainLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const chainLinkClasses = cn({
            'chainLink': true,
            [`flex-${this.props.layout}`]: this.props.layout,
            [`flex-align-${this.props.align}`]: this.props.align
        });

        const imageClasses = cn({
            'chainLink__image': true,
            [`chainLink__image--${this.props.modificator}}`]: this.props.modificator
        });

        const contentClasses = cn({
            'chainLink__content': true,
            [`flex-${this.props.contentLayout}`]: this.props.contentLayout,
            [`flex-align-${this.props.contentAlign}`]: this.props.contentAlign
        });

        return (
            <article className={chainLinkClasses}>
                <div className={imageClasses}>
                    {this.props.symbol && <span className='chainLink__symbol'>{this.props.symbol}</span>}
                </div>

                <div className={contentClasses}>
                    <div className='chainLink__index'>{this.props.index}</div>
                    <div className='chainLink__text'>{this.props.text}</div>
                </div>
            </article>
        );
    }
}

export default ChainLink;
