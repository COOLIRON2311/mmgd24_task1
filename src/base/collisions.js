import Circle from '../shapes/circle';
import Polygon from '../shapes/polygon';
import Point from './point';
import Shape from './shape';


export default class Collisions {
    /**
     * Check if AABB of `a` overlaps with AABB of `b`
     * @param {Shape} a
     * @param {Shape} b
     */
    static AABBOverlap(a, b) {
        return a.AABB.intersects(b.AABB);
    }

    /**
     * Precise collision detection for different objects
     * @param {Shape} a
     * @param {Shape} b
     */
    static PreciseOverlap(a, b) {
        if (a instanceof Circle) {
            if (b instanceof Circle)
                return Collisions.#circleCircle(a, b);
            else if (b instanceof Polygon)
                return Collisions.#polygonCircle(b, a);
            else
                throw new Error('invalid object type');
        }
        else if (a instanceof Polygon) {
            if (b instanceof Circle)
                return Collisions.#polygonCircle(a, b);
            else if (b instanceof Polygon)
                return Collisions.#polygonPolygon(a, b);
            else
                throw new Error('invalid object type');
        }
        else
            throw new Error('invalid object type');
    }

    /**
     * Calculate euclidean distance between points or objects `a` and `b`
     * @param {Point | Shape} a
     * @param {Point | Shape} b
     * @returns
     */
    static dist(a, b) {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Check if circle `c1` overlaps with circle `c2`
     * @param {Circle} c1
     * @param {Circle} c2
     */
    static #circleCircle(c1, c2) {
        const dist = this.dist(c1, c2);

        if (dist <= c1.r + c2.r)
            return true;

        return false;
    }

    /**
     * Check if point `p` is inside circle `c`
     * @param {Point} p
     * @param {Circle} c
     */
    static #pointCircle(p, c) {
        const dist = this.dist(c, p);

        if (dist <= c.r)
            return true;

        return false;
    }

    /**
     * Check if point `p` is on line defined by points `p1` and `p2`
     * @param {Point} p
     * @param {Point} p1
     * @param {Point} p2
     */
    static #pointLine(p, p1, p2) {
        const d1 = this.dist(p, p1);
        const d2 = this.dist(p, p2);

        const len = this.dist(p1, p2);
        const buf = 0.1; // a little buffer zone that will give collision
        // if the sum of two distances is equal to the line's length,
        // then the point is on the line (buf is used for range here)
        if (len - buf <= d1 + d2 && d1 + d2 <= len + buf)
            return true;

        return false;
    }

    /**
     * Check if line defined by points `p1` and `p2` overlaps with circle `c`
     * @param {Point} p1
     * @param {Point} p2
     * @param {Circle} c
     */
    static #lineCircle(p1, p2, c) {
        const inside1 = this.#pointCircle(p1, c);
        const inside2 = this.#pointCircle(p2, c);

        if (inside1 || inside2)
            return true;

        const len = this.dist(p2, p1);
        const dot = (((c.x - p1.x) * (p2.x - p1.x)) + ((c.y - p1.y) * (p2.y - p1.y))) / (len * len);

        const closest = {
            x: p1.x + (dot * (p2.x - p1.x)),
            y: p1.y + (dot * (p2.y - p1.y))
        };

        // if point is on line we can keep going, else return false
        if (!this.#pointLine(closest, p1, p2))
            return false;

        const dist = this.dist(closest, c);

        if (dist <= c.r)
            return true;

        return false;
    }

    /**
     * Check if line defined by points `p1` and `p2` overlaps with the line defined by points `p3` and `p4`
     * @param {Point} p1 point of `first` line
     * @param {Point} p2 point of `first` line
     * @param {Point} p3 point of `second` line
     * @param {Point} p4 point of `second` line
     */
    static #lineLine(p1, p2, p3, p4) {
        // directions of lines
        const uA = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x))
            / ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));

        const uB = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x))
            / ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));

        if (0 <= uA && uA <= 1 && 0 <= uB && uB <= 1)
            return true;

        return false;
    }

    /**
     * Check if polygon `p` overlaps with circle `c`
     * @param {Polygon} p
     * @param {Circle} c
     */
    static #polygonCircle(p, c) {
        const vx = p.vertices;

        if (this.#polygonPoint(p, c))
            return true;

        let next = 0;
        for (let current = 0; current < vx.length; current++) {
            next = current + 1;

            if (next === vx.length)
                next = 0;

            const vc = vx[current]; // current vertex
            const vn = vx[next]; // next vertex

            if (this.#lineCircle(vc, vn, c))
                return true;
        }

        return false;
    }

    /**
     * Check if point `p` is inside polygon `poly`
     * @param {Polygon} poly polygon
     * @param {Point} p point
     */
    static #polygonPoint(poly, p) {
        const vx = poly.vertices;
        let collision = false;

        let next = 0;
        for (let current = 0; current < vx.length; current++) {
            next = current + 1;
            if (next === vx.length)
                next = 0;

            const vc = vx[current]; // current vertex
            const vn = vx[next]; // next vertex

            if (((vc.y > p.y && vn.y < p.y) || (vc.y < p.y && vn.y > p.y)) &&
                (p.x < (vn.x - vc.x) * (p.y - vc.y) / (vn.y - vc.y) + vc.x))
                collision = !collision;
        }
        return collision;
    }

    /**
     * Check if line defined by `p1` and `p2` overlaps with polygon `p`
     * @param {Polygon} p
     * @param {Point} p1
     * @param {Point} p2
     */
    static #polygonLine(p, p1, p2) {
        const vx = p.vertices;

        let next = 0;
        for (let current = 0; current < vx.length; current++) {
            next = current + 1;

            if (next === vx.length)
                next = 0;

            const p3 = vx[current]; // current vertex
            const p4 = vx[next]; // next vertex

            if (this.#lineLine(p1, p2, p3, p4))
                return true;
        }
        return false;
    }

    /**
     * Check if polygon `p1` overlaps with polygon `p2`
     * @param {Polygon} p1
     * @param {Polygon} p2
     */
    static #polygonPolygon(p1, p2) {
        if (this.#polygonPoint(p2, p1.vertices[0]))
            return true;
        if (this.#polygonPoint(p1, p2.vertices[0]))
            return true;
        const vx = p1.vertices;

        let next = 0;
        for (let current = 0; current < vx.length; current++) {
            next = current + 1;

            if (next === vx.length)
                next = 0;

            const vc = vx[current]; // current vertex
            const vn = vx[next];  // next vertex

            if (this.#polygonLine(p2, vc, vn))
                return true;
        }
        return false;
    }
}
