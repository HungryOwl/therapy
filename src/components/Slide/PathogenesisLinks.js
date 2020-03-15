import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";

const arrows = [
    [
        {
            width: 60,
            deg: 0,
            shiftX: 55,
            shiftY: 15
        }
    ],
    [
        {
            width: 60,
            deg: -180,
            shiftX: 55,
            shiftY: -15
        }
    ],
    [
        {
            width: 207,
            deg: 45,
            shiftX: 55,
            shiftY: 0
        },
        {
            width: 207,
            deg: 135,
            shiftX: 55,
            shiftY: 0
        },
        {
            width: 68,
            deg: 90,
            shiftX: 55,
            shiftY: 0
        }
    ]
];

const chainLinks = [
    {
        layout: 'column-reverse',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Мышцы',
        index: 2,
        modificator: 'musle'
    },
    {
        layout: 'column-reverse',
        align: 'end',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Печень',
        index: 3,
        modificator: 'liver'
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        modificator: null,
        symbol: 'β'
    }
];

chainLinks.forEach((options, i) => {
    options.arrows = arrows[i];
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
            this.renderChainLink(chainLinks)
        ];
    }
}

export default PathogenesisLinks;
