import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";

const hyperglycemiaClass = 'hyperglycemiaTernary';

const arrows = [
    [
        {
            length: 60,
            deg: 0,
            shiftX: 50,
            shiftY: 10
        }
    ],
    [
        {
            length: 190,
            deg: 40,
            shiftX: 50,
            shiftY: -14
        },
        {
            length: 190,
            deg: 140,
            shiftX: 50,
            shiftY: 14
        },
        {
            length: 58,
            deg: 90,
            shiftX: 50,
            shiftY: 0
        }
    ],
    [
        {
            length: 60,
            deg: -180,
            shiftX: 50,
            shiftY: -7
        }
    ]
];

const chainLinks = [
    {
        layout: 'row-reverse',
        align: 'center',
        innerText: 'Инкретиновый <br> эффект',
        modificators: 'small',
        symbol: '2'
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        modificators: 'symbol',
        symbol: 'β'
    },
    {
        layout: 'column-reverse',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Печень',
        index: 3,
        modificators: 'liver'
    }
];

chainLinks.forEach((options, i) => {
    options.arrows = arrows[i];
    options.parentClass = hyperglycemiaClass;
});

class Pathogenesis2009 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Смертельный октет</h3>,
            <article className={hyperglycemiaClass}>
                <div className='hyperglycemiaTernary__row'>
                    <ChainLink {...chainLinks[0]}/>
                </div>

                <div className='hyperglycemiaTernary__row flex-jalign-between flex-align-end'>
                    <div className='hyperglycemiaTernary__text'>Гипергликемия</div>
                </div>
                <div className='hyperglycemiaTernary__row flex-jalign-between flex-align-end'>

                </div>
            </article>
        ];
    }
}

export default Pathogenesis2009;
