export const arrows = [
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

export const chainLinks = {
    muscle: {
        layout: 'column-reverse',
        align: 'end',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Мышцы',
        index: 2,
        img: 'muscle',
        arrows: arrows[0]
    },
    symbolB: {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        img: 'symbolβ',
        symbol: 'β',
        arrows: arrows[1]
    },
    liver: {
        layout: 'column-reverse',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'Печень',
        index: 3,
        img: 'liver',
        arrows: arrows[2]
    }
};
