import Point from './point';
import Rectangle from './rectangle';

export default class QuadTree {
    /** @type {Point[]}    */ #points;
    /** @type {Rectangle}  */ #boundary;
    /** @type {number}     */ #capacity;
    /** @type {boolean}    */ #hasChildren;
    /** @type {QuadTree[]} */ #children;

    /**
     * @param {Rectangle} boundary
     * @param {number} capacity
     */
    constructor(boundary, capacity = 4) {
        if (!boundary) {
            throw TypeError('boundary is null or undefined');
        }

        if (!(boundary instanceof Rectangle)) {
            throw TypeError('boundary should be a Rectangle');
        }

        this.#points = [];
        this.#boundary = boundary;
        this.#capacity = capacity;
        this.#hasChildren = false;
        this.#children = [];
    }

    /**
     * @param {Point} point
     * @returns {boolean} operation result
     */
    insert(point) {
        return true;
    }

    get length() {
        let count = this.#points.length;
        if (this.#hasChildren) {
            // TODO: handle children somehow
        }
        return count;
    }

    /**
     * @param {Rectangle} rect
     * @param {Array} found
     * @returns {Array}
     */
    queryRange(rect, found = []) {
        return found;
    }

    #subdivide() {
    }

    clear() {
        // clear _points and _children arrays
        // see https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
        this.#points = [];
        this.#children = [];
        this.#hasChildren = false;
    }
}
