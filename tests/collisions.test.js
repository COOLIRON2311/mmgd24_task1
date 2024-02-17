import Collisions from '../src/base/collisions';
import Circle from '../src/shapes/circle';
import Polygon from '../src/shapes/polygon';

describe('Euclidean distance', () => {
    test('dist', () => {
        const a = { x: 3, y: 3 };
        const b = { x: 6, y: 12 };

        const d = Collisions.dist(a, b);
        expect(d).toBeGreaterThan(9.48);
        expect(d).toBeLessThan(10);
    });
});

describe('CircleCircle', () => {
    test('colliding x axis', () => {
        const a = new Circle(-15, 0, 20, 0, 0);
        const b = new Circle(15, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding y axis', () => {
        const a = new Circle(0, -15, 20, 0, 0);
        const b = new Circle(0, 15, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding both axis', () => {
        const a = new Circle(-10, -10, 20, 0, 0);
        const b = new Circle(10, 10, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('not colliding x axis', () => {
        const a = new Circle(-21, 0, 20, 0, 0);
        const b = new Circle(21, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding y axis', () => {
        const a = new Circle(0, -21, 20, 0, 0);
        const b = new Circle(0, 21, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding both axis', () => {
        const a = new Circle(-15, -15, 20, 0, 0);
        const b = new Circle(15, 15, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('one common point', () => {
        const a = new Circle(-20, 0, 20, 0, 0);
        const b = new Circle(20, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('one inside another', () => {
        const a = new Circle(-20, 0, 20, 0, 0);
        const b = new Circle(20, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });
});

describe('TriangleTriangle', () => {
    test('colliding x axis', () => {
        const a = new Polygon(-10, 0, 3, 20, 0, 0);
        const b = new Polygon(10, 0, 3, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding y axis', () => {
        const a = new Polygon(0, -10, 3, 20, 0, 0);
        const b = new Polygon(0, 10, 3, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding both axis', () => {
        const a = new Polygon(-5, -5, 3, 20, 0, 0);
        const b = new Polygon(5, 5, 3, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('not colliding x axis', () => {
        const a = new Polygon(-20, 0, 3, 20, 0, 0);
        const b = new Polygon(20, 0, 3, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding y axis', () => {
        const a = new Polygon(0, -20, 3, 20, 0, 0);
        const b = new Polygon(0, 20, 3, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding both axis', () => {
        const a = new Polygon(-12, -12, 3, 20, 0, 0);
        const b = new Polygon(12, 12, 3, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('one inside another', () => {
        const a = new Polygon(10, 10, 3, 20, 0, 0);
        const b = new Polygon(1, 1, 3, 40, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });
});

describe('HexagonHexagon', () => {
    test('colliding x axis', () => {
        const a = new Polygon(-12, 0, 6, 20, 0, 0);
        const b = new Polygon(12, 0, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding y axis', () => {
        const a = new Polygon(0, -12, 6, 20, 0, 0);
        const b = new Polygon(0, 12, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding both axis', () => {
        const a = new Polygon(-10, -10, 6, 20, 0, 0);
        const b = new Polygon(10, 10, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('not colliding x axis', () => {
        const a = new Polygon(-21, 0, 6, 20, 0, 0);
        const b = new Polygon(21, 0, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding y axis', () => {
        const a = new Polygon(0, -21, 6, 20, 0, 0);
        const b = new Polygon(0, 21, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding both axis', () => {
        const a = new Polygon(-14, -14, 6, 20, 0, 0);
        const b = new Polygon(14, 14, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('one inside another', () => {
        const a = new Polygon(10, 10, 6, 20, 0, 0);
        const b = new Polygon(1, 1, 6, 40, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });
});

describe('TriangleHexagon', () => {
    test('colliding x axis', () => {
        const a = new Polygon(-12, 0, 3, 20, 0, 0);
        const b = new Polygon(12, 0, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding y axis', () => {
        const a = new Polygon(0, -12, 3, 20, 0, 0);
        const b = new Polygon(0, 12, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding both axis', () => {
        const a = new Polygon(-10, -10, 3, 20, 0, 0);
        const b = new Polygon(10, 10, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('not colliding x axis', () => {
        const a = new Polygon(-21, 0, 3, 20, 0, 0);
        const b = new Polygon(21, 0, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding y axis', () => {
        const a = new Polygon(0, -21, 3, 20, 0, 0);
        const b = new Polygon(0, 21, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding both axis', () => {
        const a = new Polygon(-15, -15, 3, 20, 0, 0);
        const b = new Polygon(15, 15, 6, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('triangle inside hexagon', () => {
        const a = new Polygon(10, 10, 3, 20, 0, 0);
        const b = new Polygon(1, 1, 6, 40, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });

    test('hexagon inside triangle', () => {
        const a = new Polygon(10, 10, 6, 20, 0, 0);
        const b = new Polygon(1, 1, 3, 60, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });
});

describe('TriangleCircle', () => {
    test('colliding x axis', () => {
        const a = new Polygon(-10, 0, 3, 20, 0, 0);
        const b = new Circle(10, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding y axis', () => {
        const a = new Polygon(0, -10, 3, 20, 0, 0);
        const b = new Circle(0, 14, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding both axis', () => {
        const a = new Polygon(-10, -10, 3, 20, 0, 0);
        const b = new Circle(10, 10, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('not colliding x axis', () => {
        const a = new Polygon(-20, 0, 3, 20, 0, 0);
        const b = new Circle(20, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding y axis', () => {
        const a = new Polygon(0, -20, 3, 20, 0, 0);
        const b = new Circle(0, 20, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding both axis', () => {
        const a = new Polygon(-15, -15, 3, 20, 0, 0);
        const b = new Circle(15, 15, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('triangle inside circle', () => {
        const a = new Polygon(10, 10, 3, 20, 0, 0);
        const b = new Circle(1, 1, 40, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });

    test('circle inside triangle', () => {
        const a = new Polygon(1, 1, 3, 60, 0, 0);
        const b = new Circle(10, 10, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });
});

describe('HexagonCircle', () => {
    test('colliding x axis', () => {
        const a = new Polygon(-12, 0, 6, 20, 0, 0);
        const b = new Circle(12, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding y axis', () => {
        const a = new Polygon(0, -10, 6, 20, 0, 0);
        const b = new Circle(0, 14, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('colliding both axis', () => {
        const a = new Polygon(-12, -12, 6, 20, 0, 0);
        const b = new Circle(12, 12, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
    });

    test('not colliding x axis', () => {
        const a = new Polygon(-21, 0, 6, 20, 0, 0);
        const b = new Circle(21, 0, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding y axis', () => {
        const a = new Polygon(0, -20, 6, 20, 0, 0);
        const b = new Circle(0, 20, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('not colliding both axis', () => {
        const a = new Polygon(-15, -15, 6, 20, 0, 0);
        const b = new Circle(15, 15, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(false);
    });

    test('hexagon inside circle', () => {
        const a = new Polygon(10, 10, 6, 20, 0, 0);
        const b = new Circle(1, 1, 40, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });

    test('circle inside hexagon', () => {
        const a = new Polygon(1, 1, 3, 60, 0, 0);
        const b = new Circle(10, 10, 20, 0, 0);
        expect(Collisions.PreciseOverlap(a, b)).toBe(true);
        expect(Collisions.PreciseOverlap(b, a)).toBe(true);
    });
});
