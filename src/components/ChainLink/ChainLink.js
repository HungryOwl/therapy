import React, { Component } from 'react';
import cn from 'classnames';
import Arrow from '../Arrow/Arrow';

class ChainLink extends Component {
    constructor(props) {
        super(props);
    }

    renderArrows(optionsArr) {
        return optionsArr.map((options, i) => <Arrow {...options} key={i}/>)
    }

    getModificators(modString, obj) {
        let modArr = modString.split(' ');
        modArr.forEach((mod) => obj[`chainLink--${mod}`] = true);

        return obj;
    }

    render() {
        const isImage = this.props.img || this.props.symbol;
        const isArrows = this.props.arrows && this.props.arrows.length > 0;
        const isTArrows = this.props.tArrows && this.props.tArrows.length > 0;

        let chainLinkClasses = {
            'chainLink': true,
            [`${this.props.parentClass}__chainLink`]: this.props.parentClass,
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
                    {isImage && <div className='chainLink__image'>
                        {this.props.symbol && <span className='chainLink__symbol'>{this.props.symbol}</span>}
                        {isArrows && this.renderArrows(this.props.arrows)}
                    </div>}

                    <div className={contentClasses}>
                        {this.props.index && <div className='chainLink__index'>{this.props.index}</div>}
                        {this.props.text && <div className='chainLink__text'>{this.props.text}</div>}
                        {this.props.innerText && <div dangerouslySetInnerHTML={{__html: this.props.innerText}} className='chainLink__text'/>}
                        {isTArrows && this.renderArrows(this.props.tArrows)}
                    </div>
                </div>
            </article>
        );
    }
}

export default ChainLink;
