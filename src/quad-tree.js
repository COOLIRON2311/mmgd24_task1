import Rectangle from './base/rectangle';
import Shape from './base/shape';
class Node {
    /** @type {Node[]}  */ children;
    /** @type {Shape[]} */ objects;

    constructor() {
        this.children = [];
        this.objects = [];
    }

    get isLeaf() {
        return this.children.length === 0;
    }
}

export default class QuadTree {
    /** @type {Rectangle}  */ #boundary;
    /** @type {number}     */ #depth;
    /** @type {number}     */ #capacity;
    /** @type {Node}       */ #root;

    /**
     * @param {Rectangle} boundary bounding box
     * @param {number} [capacity=16] max node capacity
     * @param {number} [depth=8] max tree depth
     */
    constructor(boundary, capacity = 16, depth = 8) {
        if (!boundary) {
            throw TypeError('boundary is null or undefined');
        }

        if (!(boundary instanceof Rectangle)) {
            throw TypeError('boundary should be a Rectangle');
        }

        this.#boundary = boundary;
        this.#capacity = capacity;
        this.#root = new Node();
        this.#depth = depth;
    }


    get nodes() {
        return this.#root;
    }

    //#region Helper methods

    /**
     * Computes the box of a child from the box of its parent and the index of its quadrant
     * @param {Rectangle} box parent's box
     * @param {number} i child index
     */
    static #computeBox(box, i) {
        const origin = box.top_left;
        const child_size = box.size;
        child_size.x /= 2;
        child_size.y /= 2;

        switch (i) {
            // North West
            case 0:
                return new Rectangle(
                    origin.x, origin.y,
                    child_size.x, child_size.y
                );
            // North East
            case 1:
                return new Rectangle(
                    origin.x + child_size.x, origin.y,
                    child_size.x, child_size.y
                );

            // South West
            case 2:
                return new Rectangle(
                    origin.x, origin.y + child_size.y,
                    child_size.x, child_size.y
                );

            // South East
            case 3:
                return new Rectangle(
                    origin.x + child_size.x, origin.y + child_size.y,
                    child_size.x, child_size.y
                );

            default:
                throw new Error(`invalid child index: ${i}`);
        }
    }

    /**
     * Returns the quadrant in which an `object` is
     * @param {Rectangle} node_box
     * @param {Rectangle} object_box
     * @returns {number} index of quadrant to which an object belongs to:
     * - `0` - North West
     * - `1` - North East
     * - `2` - South West
     * - `3` - South East
     * - `-1` - Not entirely contained in any of quadrants
     */
    static #getQuadrant(node_box, object_box) {
        const center = node_box.center;

        // West
        if (object_box.right < center.x) {
            // North West
            if (object_box.bottom < center.y)
                return 0;

            // South West
            else if (object_box.top >= center.y)
                return 2;

            // Not contained in any quadrant
            else
                return -1;
        }

        // East
        else if (object_box.left >= center.x) {
            // North East
            if (object_box.bottom < center.y)
                return 1;

            // South East
            else if (object_box.top >= center.y)
                return 3;

            // Not contained in any quadrant
            return -1;
        }

        // Not contained in any quadrant
        else
            return -1;
    }

    /**
     * @param {Node} node
     * @param {number} depth
     * @param {Rectangle} box
     * @param {Shape} object
     */
    #add(node, depth, box, object) {
        // console.assert(node !== null);
        // console.assert(box.contains(object.AABB));

        if (node.isLeaf) {
            // Insert the object in this node if possible
            if (depth >= this.#depth || node.objects.length < this.#capacity)
                node.objects.push(object);
            // Otherwise, split and try again
            else {
                this.#split(node, box);
                this.#add(node, depth, box, object);
            }
        }
        else {
            const i = QuadTree.#getQuadrant(box, object.AABB);
            // Add object to a child node if the object is entirely contained in it
            if (i !== -1)
                this.#add(node.children[i], depth + 1, QuadTree.#computeBox(box, i), object);

            // Otherwise, add the object to current node
            else
                node.objects.push(object);
        }
    }

    /**
     * @param {Node} node
     * @param {Rectangle} box
     */
    #split(node, box) {
        // console.assert(node !== null);
        // console.assert(node.isLeaf, 'Only leaves can be split');

        // Create children
        for (let i = 0; i < 4; i++)  // Quad (memory) damage 💀
            node.children.push(new Node());

        const new_objects = []; // objects which will remain in this node
        // Assign objects to children
        node.objects.forEach(obj => {
            const i = QuadTree.#getQuadrant(box, obj.AABB);
            if (i !== -1)
                node.children[i].objects.push(obj);
            else
                new_objects.push(obj);
        });
        node.objects = new_objects;
    }

    /**
     * @param {Node} node
     * @param {Rectangle} box
     * @param {Shape} object
     * @returns {boolean} whether parent should try to merge with its children
     */
    #remove(node, box, object) {
        // console.assert(node !== null);
        // console.assert(box.contains(object.AABB));

        if (node.isLeaf) {
            // Remove object from node
            this.#removeObject(node, object);
            return true;
        }
        else {
            // Remove object from child if the object is entirely contained in it
            const i = QuadTree.#getQuadrant(box, object.AABB);
            if (i !== -1) {
                if (this.#remove(node.children[i], QuadTree.#computeBox(box, i), object))
                    return this.#tryMerge(node);
            }

            // Otherwise, remove the object from current node
            else
                this.#removeObject(node, object);
            return false;
        }
    }

    /**
     * @param {Node} node
     * @param {Shape} object
     */
    #removeObject(node, object) {
        // Find the object in node objects
        const i = node.objects.findIndex(o => object === o);
        if (i !== -1)
            node.objects.splice(i, 1);
    }

    /**
     * @param {Node} node
     * @returns {boolean} if the node is merged
     */
    #tryMerge(node) {
        // console.assert(node !== null);
        // console.assert(!node.isLeaf, 'Only interior nodes can be merged');

        let nObjects = node.objects.length;
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (!child.isLeaf)
                return false;
            nObjects += child.objects.length;
        }
        if (nObjects <= this.#capacity) {
            // Merge objects of all children
            node.children.forEach(child => {
                node.objects.push(...child.objects);
            });

            // Remove children
            node.children = [];
            return true;
        }
        else
            return false;
    }

    /**
     * @param {Node} node
     * @param {Shape[][]} intersections
     */
    #findAllIntersections(node, intersections) {
        // Find intersections between objects stored in this node
        // Make sure to not report the same intersection twice
        for (let i = 0; i < node.objects.length; i++) {
            for (let j = 0; j < i; j++) {
                if (node.objects[i].AABB.intersects(node.objects[j].AABB))
                    intersections.push([node.objects[i], node.objects[j]]);
            }
        }

        if (!node.isLeaf) {
            // Objects in this node can intersect objects in descendants
            node.children.forEach(child => {
                node.objects.forEach(obj => {
                    this.#findIntersectionsInDescendants(child, obj, intersections);
                });
            });

            // Find intersections in children
            node.children.forEach(child => {
                this.#findAllIntersections(child, intersections);
            });
        }
    }

    /**
     * Recursively finds intersections between the given `object` and all the objects stored in the subtree
     * @param {Node} node
     * @param {Shape} object
     * @param {Shape[][]} intersections
     */
    #findIntersectionsInDescendants(node, object, intersections) {
        // Test against objects stored in this node
        node.objects.forEach(other => {
            if (object.AABB.intersects(other.AABB))
                intersections.push([object, other]);
        });

        // Test against objects stored in descendants of this node
        if (!node.isLeaf) {
            node.children.forEach(child => {
                this.#findIntersectionsInDescendants(child, object, intersections);
            });
        }
    }

    //#endregion Helper methods

    /**
     * Add `object` to this tree
     * @param {Shape} object
     */
    add(object) {
        this.#add(this.#root, 0, this.#boundary, object);
    }

    /**
     * Remove `object` from this tree
     * @param {Shape} object
     */
    remove(object) {
        this.#remove(this.#root, this.#boundary, object);
    }

    /**
     * Retrieve all unique pairs of intersecting objects
     */
    findAllIntersections() {
        /** @type {Shape[][]} */
        const intersections = [];
        this.#findAllIntersections(this.#root, intersections);
        return intersections;
    }

    clear() {
        // clear tree nodes
        this.#root = new Node();
    }
}
