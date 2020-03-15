import React, { Component } from 'react';
import cn from 'classnames';
import Arrow from "../Arrow/Arrow";

class ChainLink extends Component {
    constructor(props) {
        super(props);
    }

    renderArrows(optionsArr) {
        return (
            optionsArr.map((options, i) => {
                return (
                    <Arrow {...options} key={i}/>
                )
            })
        )
    }

    render() {
        const chainLinkClasses = cn({
            'chainLink': true,
            [`chainLink--${this.props.modificator}`]: this.props.modificator,
            [`${this.props.parentClass}__chainLink`]: this.props.parentClass
        });

        const boxClasses = cn({
            'chainLink__box': true,
            [`flex-${this.props.layout}`]: this.props.layout,
            [`flex-align-${this.props.align}`]: this.props.align
        });

        const contentClasses = cn({
            'chainLink__content': true,
            [`flex-${this.props.contentLayout}`]: this.props.contentLayout,
            [`flex-align-${this.props.contentAlign}`]: this.props.contentAlign
        });

        return (
            <article className={chainLinkClasses}>
                <div className={boxClasses}>
                    <div className='chainLink__image'>
                        {this.props.symbol && <span className='chainLink__symbol'>{this.props.symbol}</span>}
                        {this.renderArrows(this.props.arrows)}
                    </div>

                    <div className={contentClasses}>
                        <div className='chainLink__index'>{this.props.index}</div>
                        <div className='chainLink__text'>{this.props.text}</div>
                    </div>
                </div>
            </article>
        );
    }
}

export default ChainLink;
