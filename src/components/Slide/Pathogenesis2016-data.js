import React from "react";

const symbolArrows = [
    { length: 105, deg: 172, shiftX: 67, shiftY: 7 },
    { length: 105, deg: 8, shiftX: 67, shiftY: -5 },
    { length: 60, deg: 90, shiftX: 50, shiftY: 26 },
    { length: 60, deg: 90, shiftX: 50, shiftY: -26 },
    { length: 207, deg: 90, shiftX: 50 },
    { length: 140, deg: 150, shiftX: 60, shiftY: -5 },
    { length: 210, deg: 142, shiftX: 60, shiftY: -12 },
    { length: 140, deg: 30, shiftX: 60, shiftY: 7 }
];
const brainArrows = [
    { length: 105, deg: 188, shiftX: 46, shiftY: 3 }
];
const brainTArrows = [
    { length: 15, deg: 90, shiftX: 34, shiftY: 44 },
    { length: 15, deg: -90, shiftX: -58, shiftY: -54 }
];
export const chainLinks = {
    intestines: {
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
    infection: {
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
    stomach: {
        layout: 'row-reverse',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: 'Желудок',
        modificators: 'small',
        img: 'stomach',
        index: 10,
        arrows: [{
            length: 65,
            shiftX: 45,
            shiftY: 5
        }]
    },
    symbolB: {
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
    incretin: {
        layout: 'column-reverse',
        contentLayout: 'column',
        contentAlign: 'end',
        innerText: '↓&nbsp;инкретинового <br> эффекта',
        modificators: 'small incretin',
        index: 2,
        tArrows: [{
            length: 40,
            deg: 90,
            shiftX: 50,
            shiftY: -65
        }]
    },
    cellDefect: {
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
            shiftY: 64
        }]
    },
    kidneys: {
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
    brain: {
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
    liver: {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Печень',
        img: 'liver',
        modificators: 'small',
        index: 6
    },
    muscle: {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Мышцы',
        img: 'muscle',
        modificators: 'small',
        index: 5
    },
    lipid: {
        layout: 'row',
        align: 'center',
        contentLayout: 'column',
        contentAlign: 'start',
        text: 'Жировые клетки',
        img: 'lipid',
        modificators: 'small',
        index: 4
    }
};

export const arrows = {
    amylin: [
        { length: 12, deg: 90, shiftX:20 },
        { length:90, deg:25, shiftX:40, shiftY:14 }
    ],
    glukagon: [{ length:22, deg:90, shiftX:18, shiftY:64 }],
    glycemia: [{ length: 12, deg: 90, shiftX: 20, shiftY: -10 }]
};
