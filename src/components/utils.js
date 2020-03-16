// Ограничиваем переданное значение диапазоном
export class ValueRange {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    limit(value) {
        return (value < this.min) ? this.min :
               (value > this.max) ? this.max : value;
    }
}

// Перемещение по оси координат и сравнение его с пограничным значением
export class Axis {
    constructor(threshold) {
        this.threshold = threshold;
    }

    start(value) {
        this.value = this.startValue = value;
    }

    update(value) {
        this.value = value;
    }

    get delta() {
        return this.value - this.startValue;
    }

    get distance() {
        return Math.abs(this.delta);
    }

    get isUnderThreshold() {
        return this.distance <= this.threshold;
    }

    get isOverThreshold() {
        return this.distance >= this.threshold;
    }
}
