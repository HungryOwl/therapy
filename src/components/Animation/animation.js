import { ValueRange } from '../utils'

export default class Animation {
    constructor(duration) {
        this.startTime = performance.now();
        this.duration = duration;
        this.progressLimit = new ValueRange(0, 1);
    }

    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }

    get elapsedTime() {
        return this.currentTime - this.startTime;
    }

    get isFinished() {
        return this.elapsedTime > this.duration;
    }

    get timeProgress() {
        return this.progressLimit.limit(this.elapsedTime / this.duration);
    }

    progressFromTo(from, to) {
        return from + (to - from) * this.progress;
    }

    get progress() {
        return this.timeProgress;
    }

    animate(options) {
        requestAnimationFrame(this.animateFrame.bind(this, options));
    }

    animateFrame(options, currentTime) {
        this.setCurrentTime(currentTime);

        options.onAnimationFrame(this.progressFromTo(options.from, options.to));

        if (this.isFinished) {
            options.onAnimationFinish();
        } else {
            requestAnimationFrame(this.animateFrame.bind(this, options));
        }
    }
}
