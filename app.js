let slidePosition = 0;
const slides = ['images/bobbi_brown.png', 'images/MAC.png', 'images/Dior.png', 'images/NARS.png'];
const totalSlides = slides.length;
document.getElementById('corousel_button--next').addEventListener("click", function () {
    moveToNextSlide();
});

document.getElementById('corousel_button--prev').addEventListener("click", function () {
    moveToPrevSlide();
});

function updateSlidePosition() {
    document.getElementById('image').src = slides[slidePosition];
}

function moveToNextSlide() {
    if (slidePosition == totalSlides - 1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}
function moveToPrevSlide() {
    if (slidePosition == 0) {
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }
    delta = 1;
    updateSlidePosition();
}
