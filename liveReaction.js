document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('liveContainer');
    const numBalls = 20;
    let balls = [];
    let velocities = [];
    let animationFrameId = null;

    function createBalls() {
        balls.forEach(ball => container.removeChild(ball)); // clear previous balls
        balls = [];
        velocities = [];

        for (let i = 0; i < numBalls; i++) {
            const ball = document.createElement('div');
            ball.classList.add('ball');
            container.appendChild(ball);
            balls.push(ball);

            // Generate a random size between 20px and 50px
            const size = 20 + Math.random() * 30;
            ball.style.width = `${size}px`;
            ball.style.height = `${size}px`;

            // Generate a random color
            const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            ball.style.backgroundColor = color;

            // Initialize random positions within the container
            const startX = Math.random() * (container.clientWidth - size);
            const startY = Math.random() * (container.clientHeight - size);
            ball.style.left = `${startX}px`;
            ball.style.top = `${startY}px`;

            // Initialize random velocities
            const velocityX = (Math.random() * 2 - 1) * 5; // Random velocity between -5 and 5
            const velocityY = (Math.random() * 2 - 1) * 5; // Random velocity between -5 and 5
            velocities.push({ x: velocityX, y: velocityY });
        }
    }

    function animateBalls() {
        balls.forEach((ball, index) => {
            let x = parseFloat(ball.style.left);
            let y = parseFloat(ball.style.top);
            let velocity = velocities[index];
            const size = parseFloat(ball.style.width);

            x += velocity.x;
            y += velocity.y;

            // Check for collisions with the walls
            if (x <= 0 || x >= container.clientWidth - size) {
                velocity.x *= -1; // reverse the x velocity
            }
            if (y <= 0 || y >= container.clientHeight - size) {
                velocity.y *= -1; // reverse the y velocity
            }

            ball.style.left = `${x}px`;
            ball.style.top = `${y}px`;
        });

        animationFrameId = requestAnimationFrame(animateBalls);
    }

    function toggleSecretTab() {
        const secretTab = document.getElementById("liveReaction");
        if (secretTab.style.display === "flex") {
            secretTab.style.display = "none";
            // Cancel animation if the tab is hidden
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            
        } else {
            secretTab.style.display = "flex";
            // Create balls and start animation if the tab is shown
            createBalls();
            animateBalls();
        }
    }

    document.querySelector('.secretTab').addEventListener('click', toggleSecretTab);
});