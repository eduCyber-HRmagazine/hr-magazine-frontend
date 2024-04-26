// horizontal slider
var slideGroup = document.querySelector(".slide_group");
if (slideGroup) {
  var slides = slideGroup.querySelectorAll(".slide_custom");
  var currentIndex = 0;
  var timeout;

  window.addEventListener("resize", () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(0)`;
    });
    currentIndex = 0;
  });

  function move(newIndex) {
    const transformValue = window
      .getComputedStyle(slides[0])
      .getPropertyValue("transform");
    const translateXValue = parseFloat(transformValue.split(",")[4] ?? 0);

    width = document.querySelector(".sliderWrapper").offsetWidth;
    
    if (
      (currentIndex === 0 && newIndex === -1) ||
      currentIndex >= (slides.length -1) ||
      currentIndex < 0 
    ) {
      // don't move
      slides.forEach((slide) => {
        slide.style.transform = `translateX(0)`;
      });
      currentIndex = 0;
    } else {
      if (currentIndex === 0) {
        newIndex = 1;
      }

      if (currentIndex === slides.length - 1 && newIndex === slides.length) {
        currentIndex = 0;
        newIndex = -slides.length; // 3
      }

      width = document.querySelector(".sliderWrapper").offsetWidth;

      slides.forEach((slide) => {
        slide.style.transform = `translateX(${
          (currentIndex - newIndex) * width + translateXValue
        }px)`;
      });

      currentIndex++;
    }

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

  document.querySelector(".next_btn").addEventListener("click", next);
  document.querySelector(".previous_btn").addEventListener("click", previous);

  resetTimeout();
}

// vertical slider
if (document.querySelectorAll(".animation")) {
  function resumeAnimation() {
    $cards = document.querySelectorAll(".animation>*");
    $cards.forEach((card) => {
      card.style.animationPlayState = "running";
    });
  }

  function stopAnimation() {
    $cards = document.querySelectorAll(".animation>*");
    $cards.forEach((card) => {
      card.style.animationPlayState = "paused";
    });
  }

  document.querySelectorAll(".animation").forEach((obj) => {
    obj.onload = animate(obj);
  });

  function animate(obj, initialScrolling = 0) {
    cards = obj.querySelectorAll(".card");
    scrollHeight = (cards.length - 4) * cards[0].offsetHeight;

    if (scrollHeight < 0) {
      scrollHeight = 0;
    }

    animationName = "animation" + Date.now();
    time = cards.length - 3;

    if (time <= 0) {
      time = 2;
    }

    cards.forEach((card) => {
      card.style.webkitAnimation = `${animationName} ${time}s linear infinite alternate`;
      card.style.animation = `${animationName} ${time}s linear infinite alternate`;
    });

    const styleAnimation = document.createElement("style");

    keyFrame = `
  @keyframes ${animationName} {
    from {
      transform: translateY(${initialScrolling});
      -webkit-transform: translateY(${initialScrolling});
      -moz-transform: translateY(${initialScrolling});
      -ms-transform: translateY(${initialScrolling});
      -o-transform: translateY(${initialScrolling});
    }
    to {
      transform: translateY(${initialScrolling - scrollHeight}px);
      -webkit-transform: translateY(${initialScrolling - scrollHeight}px);
      -moz-transform: translateY(${initialScrolling - scrollHeight}px);
      -ms-transform: translateY(${initialScrolling - scrollHeight}px);
      -o-transform: translateY(${initialScrolling - scrollHeight}px);
    }
  }
  `;

    styleAnimation.appendChild(document.createTextNode(keyFrame));
    document.head.appendChild(styleAnimation);
  }
}
// });
