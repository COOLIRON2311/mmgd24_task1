import Rectangle from '../base/rectangle';
import Shape from '../base/shape';

export default class Circle extends Shape {
    /** @type {number} Radius */ r;

    /**
     * @param {number} x X circle center coordinate
     * @param {number} y Y circle center coordinate
     * @param {number} r Radius
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     * @param {null} [color=null] Color
     */
    constructor(x, y, r, vx, vy, color = null) {
        super(x, y, vx, vy, color);
        this.r = r;
    }

    get AABB() {
        return new Rectangle(this.x - this.r, this.y - this.r, 2 * this.r, 2 * this.r);
    }

    /**
     * Draw `this` circle using provided `context`
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        const style = context.fillStyle;
        context.fillStyle = this.color;

        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);

        context.fill();
        context.stroke();
        
        context.fillStyle = style;
        // Draw AABB (uncomment for debugging)
        // this.AABB.draw(context);
    }
}
