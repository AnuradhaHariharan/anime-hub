document.addEventListener("DOMContentLoaded", function() {
    const scrollingText = document.querySelector('.scrolling-text');
    const container = document.querySelector('.scrolling-container');
    const containerWidth = container.offsetWidth;
    const textWidth = scrollingText.scrollWidth;

    // Set up the animation duration based on the text width and container width
    const duration = (textWidth + containerWidth) / 100; // Adjust speed here

    // Create keyframes for the animation
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        @keyframes scroll {
            0% { transform: translateX(${containerWidth}px); }
            100% { transform: translateX(-${textWidth}px); }
        }

        .scrolling-text {
            animation: scroll ${duration}s linear infinite;
        }
    `;
    document.head.appendChild(styleSheet);
});