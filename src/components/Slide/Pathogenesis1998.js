import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";
import { chainLinks } from "./Pathogenesis1998-data"

class Pathogenesis1998 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Звенья патогенеза СД2</h3>,
            <article className='hyperglycemia hyperglycemia--ternary'>
                <div className='hyperglycemia__row flex-jalign-center'>
                    <ChainLink {...chainLinks.symbolB}/>
                </div>

                <div className='hyperglycemia__row flex-jalign-between flex-align-end'>
                    <ChainLink {...chainLinks.muscle}/>
                    <div className='hyperglycemia__panel'>Гипергликемия</div>
                    <ChainLink {...chainLinks.liver}/>
                </div>
            </article>
        ];
    }
}

export default Pathogenesis1998;
