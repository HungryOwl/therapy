import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";
import { chainLinks } from "./Pathogenesis2009-data";

class Pathogenesis2009 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Смертельный октет</h3>,
            <article className='hyperglycemia hyperglycemia--octet'>
                <div className='hyperglycemia__row flex-jalign-between flex-align-end'>
                    <ChainLink {...chainLinks.incretin}/>
                    <ChainLink {...chainLinks.symbolB}/>
                    <ChainLink {...chainLinks.cellDefect}/>
                </div>

                <div className='hyperglycemia__row flex-jalign-between flex-align-start'>
                    <ChainLink {...chainLinks.kidneys}/>
                    <div className='hyperglycemia__panel'>Гипергликемия</div>
                    <ChainLink {...chainLinks.lipid}/>
                </div>

                <div className='hyperglycemia__row flex-jalign-between flex-align-start'>
                    <ChainLink {...chainLinks.brain}/>
                    <ChainLink {...chainLinks.liver}/>
                    <ChainLink {...chainLinks.muscle}/>
                </div>
            </article>
        ];
    }
}

export default Pathogenesis2009;
