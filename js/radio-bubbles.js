document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll(".bubble");
    const details = document.querySelector(".bubble-details p");
    
    // Set initial selected bubble
    details.textContent = bubbles[0].getAttribute("data-text");
    
    bubbles.forEach(bubble => {
        bubble.addEventListener("click", function () {
            // Remove active class from all bubbles
            bubbles.forEach(b => b.classList.remove("active"));
            
            // Add active class to the selected bubble
            this.classList.add("active");
            
            // Update the details text
            details.textContent = this.getAttribute("data-text");
        });
    });
});