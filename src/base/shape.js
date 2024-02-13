import Rectangle from './rectangle';

export default class Shape {
    /** @type {number} Object hit points            */ lives;
    /** @type {string} Object color                 */ color;
    /** @type {number} X center coordinate          */ x;
    /** @type {number} Y center coordinate          */ y;
    /** @type {number} X velocity                   */ vx;
    /** @type {number} Y velocity                   */ vy;

    /**
     *
     * @param {string} color Color
     * @param {number} x X center coordinate
     * @param {number} y Y center coordinate
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     */
    constructor(color, x, y, vx, vy) {
        this.lives = 3;
        this.color = color;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    /** @returns {Rectangle} Axis-Aligned Bounding Box*/
    get AABB() { return null; }

    /**
     * Draw `this` object using provided `context`
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) { }

    /**
     * Check if AABB of `this` shape overlaps with AABB of `other` shape
     * @param {Shape} other another shape
     */
    AABBOverlap(other) {
        return this.AABB.intersects(other.AABB);
    }
}
