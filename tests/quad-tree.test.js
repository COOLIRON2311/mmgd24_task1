import Rectangle from '../src/base/rectangle';
import QuadTree from '../src/quad-tree';
import Circle from '../src/shapes/circle';

describe('QuadTree', () => {
    /** @type {Rectangle} */
    let boundary;

    beforeAll(() => {
        boundary = new Rectangle(0, 0, 100, 100);
    });

    it('should be empty in the initial state', () => {
        const tree = new QuadTree(boundary);
        expect(tree.nodes.children).toStrictEqual([]);
        expect(tree.nodes.objects).toStrictEqual([]);
    });

    it('should throw an exception when boundary has not been passed', () => {
        expect(() => {
            // @ts-ignore
            const tree = new QuadTree();
        }).toThrow(TypeError);
    });

    it('should throw an exception when boundary is not a Rectangle', () => {
        expect(() => {
            // @ts-ignore
            const tree = new QuadTree(42);
        }).toThrow(TypeError);
    });

    it('should handle addition of single object', () => {
        const tree = new QuadTree(boundary);
        const a = new Circle(20, 20, 10, 0, 0);
        tree.add(a);
        expect(tree.nodes.objects).toEqual([a]);
    });

    it('should handle addition of multiple objects', () => {
        const tree = new QuadTree(boundary);
        const a = new Circle(20, 20, 10, 0, 0);
        const b = new Circle(80, 80, 10, 0, 0);
        [a, b].forEach(o => tree.add(o));
        expect(tree.nodes.objects).toStrictEqual([a, b]);
    });

    it('should handle deletion of objects', () => {
        const tree = new QuadTree(boundary);
        const a = new Circle(20, 20, 10, 0, 0);
        tree.add(a);
        tree.remove(a);
        expect(tree.nodes.children).toStrictEqual([]);
        expect(tree.nodes.objects).toStrictEqual([]);
    });

    it('should subdivide if a given capacity is exceeded', () => {
        const tree = new QuadTree(boundary, 1, 1);
        const nw = new Circle(20, 20, 10, 0, 0);
        const ne = new Circle(80, 20, 10, 0, 0);
        const sw = new Circle(20, 80, 10, 0, 0);
        const se = new Circle(80, 80, 10, 0, 0);
        [nw, ne, sw, se].forEach(o => tree.add(o));

        expect(tree.nodes.children).toHaveLength(4);
        expect(tree.nodes.children[0].objects).toStrictEqual([nw]);
        expect(tree.nodes.children[1].objects).toStrictEqual([ne]);
        expect(tree.nodes.children[2].objects).toStrictEqual([sw]);
        expect(tree.nodes.children[3].objects).toStrictEqual([se]);
    });

    it('should find all intersections', () => {
        const tree = new QuadTree(boundary, 1, 1);
        const nw = new Circle(40, 40, 10, 0, 0);
        const ne = new Circle(50, 30, 10, 0, 0);
        const sw = new Circle(37, 80, 10, 0, 0);
        const se = new Circle(53, 80, 10, 0, 0);
        [nw, ne, sw, se].forEach(o => tree.add(o));

        const collisions = tree.findAllIntersections();
        expect(collisions).toHaveLength(2);
        expect(collisions[0]).toStrictEqual([ne, nw]);
        expect(collisions[1]).toStrictEqual([se, sw]);
    });

    it('should be able to be cleared', () => {
        const tree = new QuadTree(boundary);
        const nw = new Circle(20, 20, 10, 0, 0);
        const ne = new Circle(80, 20, 10, 0, 0);
        const sw = new Circle(20, 80, 10, 0, 0);
        const se = new Circle(80, 80, 10, 0, 0);
        [nw, ne, sw, se].forEach(o => tree.add(o));
        tree.clear();
        
        expect(tree.nodes.children).toStrictEqual([]);
        expect(tree.nodes.objects).toStrictEqual([]);
    });
});
