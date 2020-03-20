import React, { Component } from 'react';
import ChainLink from '../ChainLink/ChainLink';
import Arrow from '../Arrow/Arrow';
import { chainLinks } from "./Pathogenesis2016-data";


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
                    <div className='hyperglycemia__text hyperglycemia__text--amylin'>
                        <span>↓ амилин</span>
                        <Arrow length={12} deg={90} shiftX={20}/>
                        <Arrow length={90} deg={25} shiftX={40} shiftY={14}/>
                    </div>
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
                            <div className='hyperglycemia__text hyperglycemia__text--glucagon'>
                                <span>↑&nbsp;глюкагон</span>
                                <Arrow length={22} deg={90} shiftX={18} shiftY={64}/>
                            </div>
                        </section>
                    </div>

                    <div className='hyperglycemia__text hyperglycemia__text--huge'>
                        <span>Гипергликемия</span>
                        <Arrow length={12} deg={90} shiftX={20} shiftY={-10}/>
                    </div>

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
