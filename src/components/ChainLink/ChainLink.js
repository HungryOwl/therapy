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
                return <Arrow {...options} key={i}/>
            })
        )
    }

    getModificators(modString, obj) {
        let modArr = modString.split(' ');

        modArr.forEach((mod) => (
            obj[`chainLink--${mod}`] = true
        ));

        return obj;
    }

    render() {
        let chainLinkClasses = {
            'chainLink': true,
            [`chainLink--${this.props.img}`]: this.props.img
        };

        chainLinkClasses = (this.props.modificators) ? cn(this.getModificators(this.props.modificators, chainLinkClasses)) : cn(chainLinkClasses);

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
                    {(this.props.img || this.props.symbol) && <div className='chainLink__image'>
                        {this.props.symbol && <span className='chainLink__symbol'>{this.props.symbol}</span>}
                        {this.props.arrows && this.renderArrows(this.props.arrows)}
                    </div>}

                    <div className={contentClasses}>
                        {this.props.index && <div className='chainLink__index'>{this.props.index}</div>}
                        {this.props.text && <div className='chainLink__text'>{this.props.text}</div>}
                        {this.props.innerText && <div dangerouslySetInnerHTML={{__html: this.props.innerText}} className='chainLink__text'/>}
                    </div>
                </div>
            </article>
        );
    }
}

export default ChainLink;
