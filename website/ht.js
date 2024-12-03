// Set the date we're counting down to
let countDownDate = new Date("Nov 10, 2024 00:00:00").getTime();

// Update the count down every 1 second
let countdownfunction = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with respective ids
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);






let currentSlide = 0; // Track the current slide position
const slider = document.getElementById('categorySlider');
const categories = document.querySelectorAll('.category'); // All category items
const totalCategories = categories.length; // Total number of categories
const visibleCategories = 5; // Number of categories visible at a time
const categoryWidth = categories[0].offsetWidth + 20; // Category width + gap

// Function to move the slider
function moveSlider(direction) {
    currentSlide += direction; // Update slide position based on direction
    if (currentSlide < 0) { // Prevent moving beyond the first item
        currentSlide = 0;
    }
    if (currentSlide > totalCategories - visibleCategories) { // Prevent moving beyond the last visible category
        currentSlide = totalCategories - visibleCategories;
    }
    slider.style.transform = `translateX(${-categoryWidth * currentSlide}px)`; // Apply the translation
}

