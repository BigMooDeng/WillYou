document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Floating hearts
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    yesBtn.addEventListener("click", function () {
        document.body.innerHTML = ""; // Clear screen

        // Create a celebration message
        let message = document.createElement("div");
        message.className = "celebration-message";
        message.innerHTML = "You picked the right answer! 🥰 Get ready at 7:00pm on February 14th! Dress pretty! 😘";
        document.body.appendChild(message);

        // Generate floating hearts and sparkles
        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = "❤️";
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.body.appendChild(heart);
        }

        for (let i = 0; i < 20; i++) {
            let sparkle = document.createElement("div");
            sparkle.className = "sparkle";
            sparkle.innerHTML = "✨";
            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.animationDuration = `${Math.random() * 2 + 1}s`;
            document.body.appendChild(sparkle);
        }
    });

    // Floating hearts on the main screen
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);
    }
});
