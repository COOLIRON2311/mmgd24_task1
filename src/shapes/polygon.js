import Rectangle from '../base/rectangle';
import Shape from '../base/shape';

export default class Polygon extends Shape {
    /** @type {number} Circumscribed circle radius */ r;
    /** @type {number} Number of vertices          */ n;

    /**
     * @param {number} x Polygon circle center coordinate
     * @param {number} y Circumscribed circle radius
     * @param {number} n Number of vertices
     * @param {number} r Circumscribed circle radius
     * @param {number} vx X velocity
     * @param {number} vy Y velocity
     * @param {null} [color=null] Color
     */
    constructor(x, y, n, r, vx, vy, color = null) {
        super(x, y, vx, vy, color);
        this.n = n;
        this.r = r;
    }

    get AABB() {
        const pts = this.points;
        const min_x = pts.reduce((a, b) => a.x < b.x ? a : b).x;
        const max_x = pts.reduce((a, b) => a.x > b.x ? a : b).x;
        const min_y = pts.reduce((a, b) => a.y < b.y ? a : b).y;
        const max_y = pts.reduce((a, b) => a.y > b.y ? a : b).y;
        return new Rectangle(min_x, min_y, max_x - min_x, max_y - min_y);
    }

    get points() {
        const center_angle = 360 / this.n;

        const initial = Shape.radians(
            this.n % 2 === 0 ? -90 - center_angle / 2 : -90
        );

        // Pure sorcery, don't touch anything or else trigonometry magic won't work
        return Array.from({ length: this.n }, (_, i) => {
            const angle = Shape.radians(i * center_angle) + initial;
            return {
                x: this.x + this.r * Math.cos(angle),
                y: this.y + this.r * Math.sin(angle)
            };
        });
    }

    /**
     * Draw `this` polygon using provided `context`
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        const pts = this.points;
        const style = context.fillStyle;
        context.fillStyle = this.color;

        context.beginPath();
        context.moveTo(pts[0].x, pts[0].y);

        for (let i = 1; i < this.n; i++) {
            context.lineTo(pts[i].x, pts[i].y);
        }
        context.lineTo(pts[0].x, pts[0].y);

        context.fill();
        context.stroke();

        context.fillStyle = style;
        // Draw AABB (uncomment for debugging)
        this.AABB.draw(context);
        // console.log(this.AABB);
    }



}
