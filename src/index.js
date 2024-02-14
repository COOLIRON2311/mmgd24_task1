import Circle from './shapes/circle';
import Polygon from './shapes/polygon';

const canvas = document.getElementById('canvas');

const gameState = {
    objects:
        [
            new Circle(50, 50, 20, 5, 0, '#00ff00'),
            new Circle(500, 50, 20, -5, 0, '#0000ff')
        ]
};

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

        for (let j = i+1; j < gameState.objects.length; j++) {
            const o2 = gameState.objects[j];
            if (!o2.active)
                continue;

            if (i == j)
                continue;

            if (o1.AABBOverlap(o2)) {
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
            o.x += o.vx;
            o.y += o.vy;
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

setup();
run();
