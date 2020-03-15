export default class Animation {
    constructor(duration) {
        this.startTime = performance.now();
        this.duration = duration;
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

    limitTo(value, from, to) {
        if (value < from) return from;
        if (value > to) return to;
        return value;
    }

    get timeProgress() {
        return this.limitTo(this.elapsedTime / this.duration, 0, 1);
    }

    progressFromTo(from, to) {
        return from + (to - from) * this.progress;
    }

    progressValue(value) {
        return value * this.progress;
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

    get progress() {
        return this.timeProgress;
    }
}
