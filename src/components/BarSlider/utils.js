export default class BarTouchEvent {
    constructor(evt) {
        this.event = evt;
    }

    get targetClass() {
        return this.event.target.className;
    }

    get isClickedOnLine() {
        return this.targetClass === 'dragBar__line' || this.targetClass === 'dragBar__value'
    }

    get isClickedOnPin() {
        return this.targetClass === 'dragBar__pin';
    }

    get clientX() {
        return this.event.changedTouches[0].clientX;
    }

    get targetLeft() {
        return this.event.changedTouches[0].target.offsetLeft;
    }

    get currentTargetLeft() {
        return this.event.currentTarget.getBoundingClientRect().x;
    }
}
