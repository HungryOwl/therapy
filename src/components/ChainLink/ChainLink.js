import React, { Component } from 'react';
import cn from 'classnames';
import Arrow from '../Arrow/Arrow';

class ChainLink extends Component {
    constructor(props) {
        super(props);
    }

    renderArrow(arrowOpts) {
        return <Arrow {...arrowOpts}/>;
    }

    renderArrows(arrowsArr) {
        return arrowsArr.map((options, i) => <Arrow {...options} key={i}/>)
    }

    getModificators(modString, obj) {
        let modArr = modString.split(' ');
        modArr.forEach((mod) => obj[`chainLink--${mod}`] = true);

        return obj;
    }

    get chainLinkClasses() {
        let chainLinkClasses = {
            'chainLink': true,
            [`${this.props.parentClass}__chainLink`]: this.props.parentClass,
            [`chainLink--${this.props.img}`]: this.props.img
        };

        chainLinkClasses = (this.props.modificators) ?
                          cn(this.getModificators(this.props.modificators, chainLinkClasses)) :
                          cn(chainLinkClasses);
        return chainLinkClasses;
    }

    get boxClasses() {
        return cn({
            'chainLink__box': true,
            [`flex-${this.props.layout}`]: this.props.layout,
            [`flex-align-${this.props.align}`]: this.props.align
        });
    }

    get contentClasses() {
        return cn({
            'chainLink__content': true,
            [`flex-${this.props.contentLayout}`]: this.props.contentLayout,
            [`flex-align-${this.props.contentAlign}`]: this.props.contentAlign
        });
    }

    render() {
        const hasImage = this.props.img || this.props.symbol;
        const hasArrows = this.props.arrows && this.props.arrows.length;
        const hasTArrows = this.props.tArrows && this.props.tArrows.length;

        return (
            <article className={this.chainLinkClasses}>
                <div className={this.boxClasses}>
                    {hasImage && <div className='chainLink__image'>
                        {this.props.symbol && <span className='chainLink__symbol'>{this.props.symbol}</span>}
                        {this.props.arrow && this.renderArrow(this.props.arrow)}
                        {hasArrows && this.renderArrows(this.props.arrows)}
                    </div>}

                    <div className={this.contentClasses}>
                        {this.props.index && <div className='chainLink__index'>{this.props.index}</div>}
                        {this.props.text && <div className='chainLink__text'>{this.props.text}</div>}
                        {this.props.innerText && <div dangerouslySetInnerHTML={{__html: this.props.innerText}} className='chainLink__text'/>}
                        {this.props.tArrow && this.renderArrow(this.props.tArrow)}
                        {hasTArrows && this.renderArrows(this.props.tArrows)}
                    </div>
                </div>
            </article>
        );
    }
}

export default ChainLink;
