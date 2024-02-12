export default class Rectangle {
    /** @type {number} */
    x;
    /** @type {number} */
    y;
    /** @type {number} */
    w;
    /** @type {number} */
    h;
    /** @type {number} */
    vx;
    /** @type {number} */
    vy;

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} w
     * @param {number} h
     * @param {number} vx
     * @param {number} vy
     */
    constructor(x, y, w, h, vx, vy) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
    }

    get left() {
        return this.x;
    }

    get right() {
        return this.x + this.w;
    }

    get top() {
        return this.y;
    }

    get bottom() {
        return this.y + this.h;
    }

    /**
     * @param {*} point
     * @returns {boolean}
     */
    contains(point) {
        return (
            point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h
        );
    }

    /**
     * @param {Rectangle} rect
     * @returns {boolean}
     */
    intersects(rect) {
        return (this.x < rect.x + rect.w)
            && (rect.x < this.x + this.w)
            && (this.y < rect.y + rect.h)
            && (rect.y < this.y + this.w);
    }
}
