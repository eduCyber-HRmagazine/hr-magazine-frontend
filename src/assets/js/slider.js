document.addEventListener('DOMContentLoaded', function() {
  var slideGroup = document.querySelector('.slide_group');
  var slides = slideGroup.querySelectorAll('.slide_custom');
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    // Remove 'active' class from current slide pairs
    var currentPairIndex = currentIndex % slides.length;
    slides[currentPairIndex].classList.remove('active');
    slides[(currentPairIndex + 1) % slides.length].classList.remove('active');

    // Calculate new index ensuring not to pair the last slide with the first slide
    if (newIndex < 0) {
      newIndex = slides.length - 2; // Move back two slides for pairs
    } else if (newIndex >= slides.length - 1) {
      newIndex = 0; // Restart from the beginning
    }

    // Add 'active' class to new slide pair
    var newPairIndex = newIndex % slides.length;
    slides[newPairIndex].classList.add('active');
    slides[(newPairIndex + 1) % slides.length].classList.add('active');
    currentIndex = newIndex;

    resetTimeout();
  }

  function next() {
    move(currentIndex + 1); // Move to the next slide pair
  }

  function previous() {
    move(currentIndex - 1); // Move to the previous slide pair
  }

  function resetTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(next, 4000);
  }

  document.querySelector('.next_btn').addEventListener('click', next);
  document.querySelector('.previous_btn').addEventListener('click', previous);

  // Show the initial slide pair
  slides[currentIndex % slides.length].classList.add('active');
  slides[(currentIndex + 1) % slides.length].classList.add('active');

  resetTimeout();
});