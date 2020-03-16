import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";



const arrows = [
    [
        {
            length: 33,
            deg: 90,
            shiftX: 30
        }
    ],
    [
        {
            length: 33,
            deg: 90,
            shiftX: 30
        }
    ],
    [
        {
            length: 33,
            deg: 90,
            shiftX: 30
        }
    ]
];

const chainLinks = [
    {
        layout: 'row-reverse',
        align: 'center',
        innerText: 'Инкретиновый <br> эффект',
        modificators: 'small',
        symbol: 2
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        modificators: 'symbol small',
        symbol: 'β'
    },
    {
        layout: 'row',
        align: 'center',
        innerText: 'Дефект <br> α-клеток',
        modificators: 'small',
        symbol: 3
    }
];

chainLinks.forEach((options, i) => {
    options.arrows = arrows[i];
    options.parentClass = 'hyperglycemia';
});

class Pathogenesis2009 extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log(chainLinks[0]);

        return [
            <h3 className='slide__title'>Смертельный октет</h3>,
            <article className='hyperglycemia hyperglycemia--octet'>
                <div className='hyperglycemia__row flex-align-end'>
                    <ChainLink {...chainLinks[0]}/>
                    <ChainLink {...chainLinks[1]}/>
                    <ChainLink {...chainLinks[2]}/>
                </div>

                <div className='hyperglycemia__row flex-jalign-between flex-align-end'>
                    <div className='hyperglycemia__text'>Гипергликемия</div>
                </div>
                <div className='hyperglycemia__row flex-jalign-between flex-align-end'>

                </div>
            </article>
        ];
    }
}

export default Pathogenesis2009;
