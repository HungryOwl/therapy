import Animation from './animation'

export class ChainedAnimation extends Animation {
    constructor(subAnimation) {
        super(subAnimation.duration);
        this.subAnimation = subAnimation;
    }

    get startTime() {
        return this.subAnimation.startTime;
    }

    set startTime(startTime) {
    }

    get duration() {
        return this.subAnimation.duration;
    }

    set duration(duration) {
    }

    setCurrentTime(currentTime) {
        this.subAnimation.setCurrentTime(currentTime);
    }

    get elapsedTime() {
        return this.subAnimation.elapsedTime;
    }

    get isFinished() {
        return this.subAnimation.isFinished;
    }

    get timeProgress() {
        return this.subAnimation.timeProgress;
    }

    get progress() {
        return this.subAnimation.progress;
    }
}

/**
 * Рассчет параметра отрисовки объекта на экране с помощью функции дуги
 * (progress = 1 - Math.sin(Math.acos(timeFraction)))
 * @param  {number} timeFraction входное значение состояния анимации
 * @return {number}              выходное (рассчетное) значение состояния анимации
 */
export class CircAnimation extends ChainedAnimation {
    get progress() {
        return 1 - Math.sin(Math.acos(this.subAnimation.progress));
    }
}

export class ReverseAnimation extends ChainedAnimation {
    get progress() {
        return 1 - this.subAnimation.progress;
    }
}
