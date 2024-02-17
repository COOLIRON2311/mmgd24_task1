import Collisions from './base/collisions';
import Circle from './shapes/circle';
import Polygon from './shapes/polygon';

const canvas = document.getElementById('canvas');

const gameState = {
    objects:
        [
            // new Circle(50, 50, 20, 5, 0, '#00ff00'),
            // new Circle(500, 50, 20, -5, 0, '#0000ff'),
            // new Polygon(100, 100, 6, 20, 5, 5, '#ff0000')
        ]
};

//#region Shapes generation
const N_objects = 10;
const speedX = 2;
const speedY = 2;
const r = 20;

// Circles
for (let i = 0; i < N_objects; i++) {
    const x = randInRange(0 + r / 2, window.innerWidth - r / 2);
    const y = randInRange(0 + r / 2, window.innerHeight - r / 2);

    const a = randInRange(1, 360);
    const vx = Math.cos(a) * speedX;
    const vy = Math.sin(a) * speedY;

    gameState.objects.push(new Circle(x, y, r, vx, vy));
}

// Triangles
for (let i = 0; i < N_objects; i++) {
    const x = randInRange(0 + r / 2, window.innerWidth - r / 2);
    const y = randInRange(0 + r / 2, window.innerHeight - r / 2);

    const a = randInRange(0, 360);
    const vx = Math.cos(a) * speedX;
    const vy = Math.sin(a) * speedY;

    gameState.objects.push(new Polygon(x, y, 3, r, vx, vy));
}

// Hexagons
for (let i = 0; i < N_objects; i++) {
    const x = randInRange(0 + r / 2, window.innerWidth - r / 2);
    const y = randInRange(0 + r / 2, window.innerHeight - r / 2);

    const a = randInRange(1, 360);
    const vx = Math.cos(a) * speedX;
    const vy = Math.sin(a) * speedY;

    gameState.objects.push(new Polygon(x, y, 6, r, vx, vy));
}
//#endregion Shapes generation

/**
 * @param {number} numTicks
 */
function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
        gameState.lastTick = gameState.lastTick + gameState.tickLength;
        update(gameState.lastTick);
    }
}

/**
 * @param {DOMHighResTimeStamp} tFrame
 */
function draw(tFrame) {
    /** @type {CanvasRenderingContext2D} */
    const context = canvas.getContext('2d');

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw
    gameState.objects.forEach(o => {
        if (o.active)
            o.draw(context);
    });
}

/**
 * @param {number} tick
 */
function update(tick) {
    // Naïve Collision Detection
    // TODO: Implement it using Quad-trees
    for (let i = 0; i < gameState.objects.length; i++) {
        const o1 = gameState.objects[i];
        if (!o1.active)
            continue;

        for (let j = i + 1; j < gameState.objects.length; j++) {
            const o2 = gameState.objects[j];
            if (!o2.active)
                continue;

            if (!Collisions.AABBOverlap(o1, o2))
                continue;

            if (Collisions.PreciseOverlap(o1, o2)) {
                o1.vx = -o1.vx;
                o1.vy = -o1.vy;
                o1.handleCollision();

                o2.vx = -o2.vx;
                o2.vy = -o2.vy;
                o2.handleCollision();
            }

        }

        // Window border check
        if (0 > o1.AABB.left || window.innerWidth < o1.AABB.right) {
            o1.vx = -o1.vx;
            o1.handleCollision(true);
        }

        if (0 > o1.AABB.top || window.innerHeight < o1.AABB.bottom) {
            o1.vy = -o1.vy;
            o1.handleCollision(true);
        }
    }

    // Update objects position
    gameState.objects.forEach(o => {
        if (o.active) {
            o.move();
        }
    });
}

/**
 * @param {DOMHighResTimeStamp} tFrame
 */
function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run);

    const nextTick = gameState.lastTick + gameState.tickLength;
    let numTicks = 0;

    if (tFrame > nextTick) {
        const timeSinceTick = tFrame - gameState.lastTick;
        numTicks = Math.floor(timeSinceTick / gameState.tickLength);
    }
    queueUpdates(numTicks);
    draw(tFrame);
    gameState.lastRender = tFrame;
}

function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}

function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameState.lastTick = performance.now();
    gameState.lastRender = gameState.lastTick;
    gameState.tickLength = 15; // ms
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * @param {number} min
 * @param {number} max
 * @returns
 */
function randInRange(min, max) {
    return Math.random() * (max - min) + min;
}

setup();
run();
