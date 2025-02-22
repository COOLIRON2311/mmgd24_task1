import Point from './point';
import Rectangle from './rectangle';

export default class Shape {
    /** @type {number} Object hit points            */ lives;
    /** @type {string} Object color                 */ color;
    /** @type {number} X center coordinate          */ x;
    /** @type {number} Y center coordinate          */ y;
    /** @type {number} X velocity                   */ vx;
    /** @type {number} Y velocity                   */ vy;
    /** @type {boolean} Active                      */ active;
    /** @type {Rectangle} Axis-Aligned Bounding Box */ AABB;

    /**
     *
     * @param {number} x X center coordinate
     * @param {number} y Y center coordinate
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     * @param {null} [color=null] Color
     */
    constructor(x, y, vx, vy, color = null) {
        this.color = color || Shape.randomHexColor();
        this.active = true;
        this.lives = 100;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    /** @returns {Point} */
    get center() {
        return { x: this.x, y: this.y };
    }

    /**
     * Draw `this` object using provided `context`
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) { }

    /**
     * Moves `this` object by (`vx`, `vy`)
     */
    move() { }

    /**
     * Handle collision with other object
     * @param {boolean} [screen_border=false] whether did collision happen with screen border
     */
    handleCollision(screen_border = false) {
        if (screen_border)
            return;

        this.lives--;
        if (this.lives === 0) {
            this.active = false;
            return;
        }

        this.color = Shape.randomHexColor();
    }

    static randomHexColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    /**
     * Convert number of `degrees` to `radians`
     * @param {number} degrees to convert
     */
    static radians(degrees) {
        return degrees * Math.PI / 180.0;
    }
}
