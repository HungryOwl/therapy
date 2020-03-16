import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";

const arrows = [
    [
        {
            length: 60,
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
        layout: 'column-reverse',
        align: 'end',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Мышцы',
        index: 2,
        modificators: 'musle'
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        modificators: 'symbolβ',
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
});

class Pathogenesis1998 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Звенья патогенеза СД2</h3>,
            <article className='hyperglycemia hyperglycemia--ternary'>
                <div className='hyperglycemia__row flex-jalign-center'>
                    <ChainLink {...chainLinks[1]}/>
                </div>

                <div className='hyperglycemia__row flex-jalign-between flex-align-end'>
                    <ChainLink {...chainLinks[0]}/>
                    <div className='hyperglycemia__text'>Гипергликемия</div>
                    <ChainLink {...chainLinks[2]}/>
                </div>
            </article>
        ];
    }
}

export default Pathogenesis1998;
