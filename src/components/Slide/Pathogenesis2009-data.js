const mainArrows = {
    up:    { length: 24, deg: 270, shiftX: 30 },
    down:  { length: 24, deg: 90, shiftX: 30 },
    left:  { length: 24, deg: 180, shiftX: 30 },
    right: { length: 24, shiftX: 30 }
};

export const chainLinks = {
    incretin: {
        layout: 'row-reverse',
        align: 'center',
        innerText: 'Инкретиновый <br/> эффект',
        modificators: 'small',
        symbol: 2,
        arrow: mainArrows.down

    },
    symbolB: {
        layout: 'column-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        text: 'β-клетки',
        index: 1,
        img: 'symbolβ',
        modificators: 'small',
        symbol: 'β',
        arrow: mainArrows.down
    },
    cellDefect: {
        layout: 'row',
        align: 'center',
        innerText: 'Дефект <br/> α-клеток',
        modificators: 'small',
        symbol: 3,
        arrow: mainArrows.down
    },
    kidneys: {
        layout: 'row-reverse',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'end',
        text: 'Почки',
        img: 'kidneys',
        modificators: 'small',
        index: 8,
        arrow: mainArrows.right
    },
    lipid: {
        layout: 'row',
        align: 'start',
        contentLayout: 'column',
        contentAlign: 'start',
        innerText: 'Жировые <br/> клетки',
        img: 'lipid',
        modificators: 'small',
        index: 4,
        arrow: mainArrows.left
    },
    brain: {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Головной <br/> мозг',
        img: 'brain',
        modificators: 'small',
        index: 7,
        arrow: mainArrows.up
    },
    liver: {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Печень',
        img: 'liver',
        modificators: 'small',
        index: 6,
        arrow: mainArrows.up
    },
    muscle: {
        layout: 'column',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'center',
        innerText: 'Мышцы',
        img: 'muscle',
        modificators: 'small',
        index: 5,
        arrow: mainArrows.up
    }
};
