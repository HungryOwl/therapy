import React, { Component } from 'react';
import ChainLink from '../ChainLink/ChainLink';
import Arrow from '../Arrow/Arrow';

const mainArrows = {
    up:  {
        length: 24,
        deg: 270,
        shiftX: 30
    },
    down: {
        length: 24,
        deg: 90,
        shiftX: 30
    },
    left: {
        length: 24,
        deg: 180,
        shiftX: 30
    },
    right: {
        length: 24,
        shiftX: 30
    },
};

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
        arrows: []
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
        arrows: []
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
        arrows: []
    },
    {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'row',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        img: 'symbolβ',
        modificators: 'small',
        symbol: 'β',
        arrows: []
    },
    {
        layout: 'column-reverse',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: '↓ инкретинового <br> эффекта',
        modificators: 'small',
        index: 2,
        arrows: []
    },
    {
        layout: 'column-reverse',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Дефект α-клеток',
        modificators: 'small',
        index: 3,
        arrows: []
    },
    {
        layout: 'row-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Почки',
        img: 'kidneys',
        modificators: 'small',
        index: 11,
        arrows: []
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
        arrows: []
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
                        <Arrow length={12} deg={90} shiftX={20} />
                    </div>
                    <ChainLink {...chainLinks[2]}/>
                </div>

                <div className='hyperglycemia__column flex-align-center'>
                    <ChainLink {...chainLinks[3]}/>

                    <section className='hyperglycemia__row'>
                        <ChainLink {...chainLinks[4]}/>
                        <ChainLink {...chainLinks[5]}/>
                    </section>

                    <section className='hyperglycemia__row'>
                        <div className='hyperglycemia__text hyperglycemia__text--amylin'>
                            <span>↓ глюкагон</span>
                            <Arrow length={12} deg={90} shiftX={20} />
                        </div>
                    </section>

                    <div className='hyperglycemia__text'>Гипергликемия</div>
                    <ChainLink {...chainLinks[6]}/>
                </div>

                <div className='hyperglycemia__column'>
                    <ChainLink {...chainLinks[7]}/>

                    <section className='hyperglycemia__column hyperglycemia__column--group'>
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
