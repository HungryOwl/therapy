import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";

const hyperglycemiaClass = 'hyperglycemiaTernary';

const arrows = [
    [
        {
            width: 60,
            deg: 0,
            shiftX: 50,
            shiftY: 7
        }
    ],
    [
        {
            width: 190,
            deg: 40,
            shiftX: 50,
            shiftY: -14
        },
        {
            width: 190,
            deg: 140,
            shiftX: 50,
            shiftY: 14
        },
        {
            width: 58,
            deg: 90,
            shiftX: 50,
            shiftY: 0
        }
    ],
    [
        {
            width: 60,
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
        modificator: 'musle'
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        modificator: 'symbol',
        symbol: 'β'
    },
    {
        layout: 'column-reverse',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Печень',
        index: 3,
        modificator: 'liver'
    }
];

chainLinks.forEach((options, i) => {
    options.arrows = arrows[i];
    options.parentClass = hyperglycemiaClass;
});

class PathogenesisLinks extends Component {
    constructor(props) {
        super(props);
    }

    renderChainLink(optionsArr) {
        return (
            optionsArr.map((options, i) => {
                return (
                    <ChainLink {...options} key={i}/>
                )
            })
        )
    }

    render() {
        return [
            <h3 className='slide__title'>Звенья патогенеза СД2</h3>,
            <article className={hyperglycemiaClass}>
                <div className='hyperglycemiaTernary__row flex-jalign-center'>
                    <ChainLink {...chainLinks[1]}/>
                </div>

                <div className='hyperglycemiaTernary__row flex-jalign-between flex-align-end'>
                    <ChainLink {...chainLinks[0]}/>
                    <div className='hyperglycemiaTernary__text'>Гипергликемия</div>
                    <ChainLink {...chainLinks[2]}/>
                </div>
            </article>
        ];
    }
}

export default PathogenesisLinks;
