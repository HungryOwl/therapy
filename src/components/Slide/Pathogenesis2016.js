import React, { Component } from 'react';
import ChainLink from '../ChainLink/ChainLink';
import Arrow from '../Arrow/Arrow';

const symbolArrows = [
    {
        length: 105,
        deg: 172,
        shiftX: 67,
        shiftY: 7
    },
    {
        length: 105,
        deg: 8,
        shiftX: 67,
        shiftY: -5
    },
    {
        length: 60,
        deg: 90,
        shiftX: 50,
        shiftY: 26
    },
    {
        length: 60,
        deg: 90,
        shiftX: 50,
        shiftY: -26
    },
    {
        length: 207,
        deg: 90,
        shiftX: 50
    },
    {
        length: 140,
        deg: 150,
        shiftX: 60,
        shiftY: -5
    },
    {
        length: 210,
        deg: 142,
        shiftX: 60,
        shiftY: -12
    },
    {
        length: 140,
        deg: 30,
        shiftX: 60,
        shiftY: 7
    }
];
const brainArrows = [
    {
        length: 105,
        deg: 188,
        shiftX: 46,
        shiftY: 3
    }
];
const brainTArrows = [
    {
        length: 15,
        deg: 90,
        shiftX: 34,
        shiftY: 44
    },
    {
        length: 15,
        deg: -90,
        shiftX: -58,
        shiftY: -54
    }
];
const chainLinks = [
    {
        layout: 'row-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: 'Микрофлора <br> кишечника',
        img: 'intestines',
        modificators: 'small',
        index: 8,
        arrows: [{
            length: 105,
            deg: -8,
            shiftX: 50,
            shiftY: -5
        }]
    },
    {
        layout: 'row-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: 'Нарушение имунной <br> регуляции/воспаление',
        index: 9,
        img: 'infection',
        modificators: 'small',
        arrows: [{
            length: 140,
            deg: -30,
            shiftX: 50,
            shiftY: 8
        }]
    },
    {
        layout: 'row-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: 'Желудок',
        modificators: 'small',
        img: 'stomach',
        index: 10,
        arrows: [
            {
                length: 65,
                shiftX: 45,
                shiftY: 5
            }
        ]
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'row',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        img: 'symbolβ',
        symbol: 'β',
        arrows: symbolArrows
    },
    {
        layout: 'column-reverse',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: '↓&nbsp;инкретинового <br> эффекта',
        modificators: 'small incretin',
        index: 2,
        arrows: [],
        tArrows: [{
            length: 40,
            deg: 90,
            shiftX: 50,
            shiftY: -65
        }]
    },
    {
        layout: 'column-reverse',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Дефект α-клеток',
        modificators: 'small cellDefect',
        index: 3,
        tArrows: [{
            length: 10,
            deg: 90,
            shiftX: 30,
            shiftY: 65
        }]
    },
    {
        layout: 'row-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: 'Почки',
        img: 'kidneys',
        modificators: 'small',
        index: 11,
        arrows: [{
            length: 12,
            deg: 270,
            shiftX: 40,
            shiftY: -14
        }]
    },
    {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Головной мозг',
        img: 'brain',
        modificators: 'small',
        index: 7,
        arrows: brainArrows,
        tArrows: brainTArrows
    },
    {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Печень',
        img: 'liver',
        modificators: 'small',
        index: 6,
        arrows: []
    },
    {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Мышцы',
        img: 'musle',
        modificators: 'small',
        index: 5,
        arrows: []
    },
    {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Жировые клетки',
        img: 'lipid',
        modificators: 'small',
        index: 4,
        arrows: []
    }
];

class Pathogenesis2016 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Звенья патогенеза СД2</h3>,
            <article className='hyperglycemia hyperglycemia--sd2 flex-row'>
                <div className='hyperglycemia__column flex-align-end'>
                    <ChainLink {...chainLinks[0]}/>
                    <ChainLink {...chainLinks[1]}/>
                    <div className='hyperglycemia__text hyperglycemia__text--amylin'>
                        <span>↓ амилин</span>
                        <Arrow length={12} deg={90} shiftX={20}/>
                        <Arrow length={90} deg={25} shiftX={40} shiftY={14}/>
                    </div>
                    <ChainLink {...chainLinks[2]}/>
                </div>

                <div className='hyperglycemia__column flex-align-center'>
                    <ChainLink {...chainLinks[3]}/>

                    <div className='hyperglycemia__row'>
                        <section className='hyperglycemia__column w-half'>
                            <ChainLink {...chainLinks[4]}/>
                        </section>

                        <section className='hyperglycemia__column w-half'>
                            <ChainLink {...chainLinks[5]}/>
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

                    <ChainLink {...chainLinks[6]}/>
                </div>

                <div className='hyperglycemia__column flex-align-start'>
                    <ChainLink {...chainLinks[7]}/>

                    <section className='hyperglycemia__column hyperglycemia__column--resistgroup'>
                        <Arrow length={140} deg={210} shiftX={180} shiftY={48}/>
                        <div className='hyperglycemia__text hyperglycemia__text--small'>Инсулинорезистентность</div>
                        <ChainLink {...chainLinks[8]}/>
                        <ChainLink {...chainLinks[9]}/>
                        <ChainLink {...chainLinks[10]}/>
                    </section>
                </div>
            </article>
        ];
    }
}

export default Pathogenesis2016;
