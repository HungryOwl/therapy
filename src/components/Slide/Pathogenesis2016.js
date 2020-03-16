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
        align: '',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: 'Инкретинового <br> эффекта',
        modificators: 'small',
        index: 2,
        arrows: []
    },
    {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Головной <br> мозг',
        img: 'brain',
        modificators: 'small',
        index: 7,
        arrows: [mainArrows.up]
    },
    {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Печень',
        img: 'liver',
        modificators: 'small',
        index: 6,
        arrows: [mainArrows.up]
    },
    {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Мышцы',
        img: 'musle',
        modificators: 'small',
        index: 5,
        arrows: [mainArrows.up]
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

                <div className='hyperglycemia__column'>
                    <ChainLink {...chainLinks[3]}/>
                    <ChainLink {...chainLinks[4]}/>
                </div>

                <div className='hyperglycemia__column'>

                </div>
            </article>
        ];
    }
}

export default Pathogenesis2016;
