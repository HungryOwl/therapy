import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";

const arrows = [
    [
        {
            length: 24,
            deg: 90,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            deg: 90,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            deg: 90,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            deg: 180,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            deg: 270,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            deg: 270,
            shiftX: 30
        }
    ],
    [
        {
            length: 24,
            deg: 270,
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
        modificators: 'symbolβ small',
        symbol: 'β'
    },
    {
        layout: 'row',
        align: 'center',
        innerText: 'Дефект <br> α-клеток',
        modificators: 'small',
        symbol: 3
    },
    {
        layout: 'row-reverse',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'end',
        text: 'Почки',
        modificators: 'kidneys small',
        index: 8
    },
    {
        layout: 'row',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'start',
        innerText: 'Жировые <br> клетки',
        modificators: 'lipid small',
        index: 4
    },
    {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Головной <br> мозг',
        modificators: 'brain small',
        index: 7
    },
    {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Печень',
        modificators: 'liver small',
        index: 6
    },
    {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Мышцы',
        modificators: 'musle small',
        index: 5
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
        return [
            <h3 className='slide__title'>Смертельный октет</h3>,
            <article className='hyperglycemia hyperglycemia--octet'>
                <div className='hyperglycemia__row flex-jalign-between flex-align-end'>
                    <ChainLink {...chainLinks[0]}/>
                    <ChainLink {...chainLinks[1]}/>
                    <ChainLink {...chainLinks[2]}/>
                </div>

                <div className='hyperglycemia__row flex-jalign-between flex-align-start'>
                    <ChainLink {...chainLinks[3]}/>
                    <div className='hyperglycemia__text'>Гипергликемия</div>
                    <ChainLink {...chainLinks[4]}/>
                </div>
                <div className='hyperglycemia__row flex-jalign-between flex-align-start'>
                    <ChainLink {...chainLinks[5]}/>
                    <ChainLink {...chainLinks[6]}/>
                    <ChainLink {...chainLinks[7]}/>
                </div>
            </article>
        ];
    }
}

export default Pathogenesis2009;
