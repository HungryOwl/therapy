import React, { Component } from 'react';
import ChainLink from '../ChainLink/ChainLink';
import Arrow from '../Arrow/Arrow';
import ArrowedText from '../ArrowedText/ArrowedText';
import { chainLinks, arrows } from "./Pathogenesis2016-data";

class Pathogenesis2016 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Звенья патогенеза СД2</h3>,
            <article className='hyperglycemia hyperglycemia--sd2 flex-row'>
                <div className='hyperglycemia__column flex-align-end'>
                    <ChainLink {...chainLinks.intestines}/>
                    <ChainLink {...chainLinks.infection}/>
                    <ArrowedText text='↓&nbsp;амилин' classes='hyperglycemia__text hyperglycemia__text--amylin' arrows={arrows.amylin}/>
                    <ChainLink {...chainLinks.stomach}/>
                </div>

                <div className='hyperglycemia__column flex-align-center'>
                    <ChainLink {...chainLinks.symbolB}/>

                    <div className='hyperglycemia__row'>
                        <section className='hyperglycemia__column w-half'>
                            <ChainLink {...chainLinks.incretin}/>
                        </section>

                        <section className='hyperglycemia__column w-half'>
                            <ChainLink {...chainLinks.cellDefect}/>
                            <ArrowedText text='↑&nbsp;глюкагон' classes='hyperglycemia__text hyperglycemia__text--glucagon' arrows={arrows.glukagon}/>
                        </section>
                    </div>

                    <ArrowedText text='Гипергликемия' classes='hyperglycemia__text hyperglycemia__text--huge' arrows={arrows.glycemia}/>
                    <ChainLink {...chainLinks.kidneys}/>
                </div>

                <div className='hyperglycemia__column flex-align-start'>
                    <ChainLink {...chainLinks.brain}/>

                    <section className='hyperglycemia__column hyperglycemia__column--resistgroup'>
                        <Arrow length={140} deg={210} shiftX={180} shiftY={48}/>
                        <div className='hyperglycemia__text hyperglycemia__text--small'>Инсулинорезистентность</div>
                        <ChainLink {...chainLinks.liver}/>
                        <ChainLink {...chainLinks.muscle}/>
                        <ChainLink {...chainLinks.lipid}/>
                    </section>
                </div>
            </article>
        ];
    }
}

export default Pathogenesis2016;
