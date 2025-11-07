var count = 1000;
var defaults = {
    origin: {
        y: 0.1
    },
    ticks: 400,
    scalar: 0.5,
    gravity: 2
};

function fire(particleRatio, opts) {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
    });
}

setTimeout(() => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}, "3400");
