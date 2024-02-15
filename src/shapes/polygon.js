import Point from '../base/point';
import Rectangle from '../base/rectangle';
import Shape from '../base/shape';

export default class Polygon extends Shape {
    /** @type {number} Circumscribed circle radius */ r;
    /** @type {number} Number of vertices          */ n;
    /** @type {Point[]} Polygon vertices           */ vertices;

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

        // Calculate vertices
        const center_angle = 360 / this.n;
        const step = Shape.radians(center_angle);

        let angle;
        if (n % 2 === 0)
            angle = Shape.radians(-90 - center_angle / 2);
        else
            angle = Shape.radians(-90);

        this.vertices = Array.from({ length: this.n }, () => {
            const p = {
                x: this.x + this.r * Math.cos(angle),
                y: this.y + this.r * Math.sin(angle)
            };
            angle += step;
            return p;
        });

        // Calculate AABB
        const min_x = this.vertices.reduce((a, b) => a.x < b.x ? a : b).x;
        const max_x = this.vertices.reduce((a, b) => a.x > b.x ? a : b).x;
        const min_y = this.vertices.reduce((a, b) => a.y < b.y ? a : b).y;
        const max_y = this.vertices.reduce((a, b) => a.y > b.y ? a : b).y;
        this.AABB = new Rectangle(min_x, min_y, max_x - min_x, max_y - min_y);

    }

    /**
     * Draw `this` polygon using provided `context`
     * @param {CanvasRenderingContext2D} context
     */
    draw(context) {
        const style = context.fillStyle;
        context.fillStyle = this.color;

        context.beginPath();
        context.moveTo(this.vertices[0].x, this.vertices[0].y);

        for (let i = 1; i < this.n; i++) {
            context.lineTo(this.vertices[i].x, this.vertices[i].y);
        }
        context.lineTo(this.vertices[0].x, this.vertices[0].y);

        context.fill();
        context.stroke();

        context.fillStyle = style;

        // Draw AABB (uncomment for debugging)
        this.AABB.draw(context);
    }

    /**
     * Moves `this` polygon by (`vx`, `vy`)
     */
    move() {
        this.vertices.forEach((p, _) => {
            p.x += this.vx;
            p.y += this.vy;
        });
        this.AABB.x += this.vx;
        this.AABB.y += this.vy;
    }
}
