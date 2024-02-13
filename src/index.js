import Circle from './shapes/circle';

const canvas = document.getElementById('canvas');
const gameState = {
    objects:
        [
            new Circle('#00ff00', 50, 50, 20, 1, 0),
            new Circle('#0000ff', 500, 50, 20, -1, 0)
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
        o.draw(context);
    });
}

/**
 * @param {number} tick
 */
function update(tick) {
    // Naïve Collision Detection
    // TODO: Implement it using Quad-trees
    gameState.objects.forEach(o1 => {
        gameState.objects.forEach(o2 => {
            if (o1 !== o2) {
                if (o1.AABBOverlap(o2)) {
                    o1.vx = -o1.vx;
                    o1.vy = -o1.vy;
                }
            }
        });

        // Window border check
        if (0 > o1.AABB.left || window.innerWidth < o1.AABB.right)
            o1.vx = -o1.vx;
        if (0 > o1.AABB.top || window.innerHeight < o1.AABB.bottom)
            o1.vy = -o1.vy;
    });

    // Update objects position
    gameState.objects.forEach(o => {
        o.x += o.vx;
        o.y += o.vy;
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
