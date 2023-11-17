
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");
    let mountains_front = document.getElementById("mountains_front");
    let header = document.querySelector("h1");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.15 + "px";
      mountains_behind.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
      text.style.marginRight = value * 3.15 + "px";
      text.style.marginTop = value * 1.5 + "px";
      btn.style.marginTop = value * 1.5 + "px";
      header.style.top = value * 0.5 + "px";
    });

    //     const cardContainer = document.querySelector('.card-container');
    //     const cards = document.querySelectorAll('.card');
    //     const prevButton = document.getElementById('prev');
    //     const nextButton = document.getElementById('next');
    //     let currentIndex = 0;

    //     const cardWidth = cards[0].offsetWidth;

    //     function updateCardPosition() {
    //         cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    //     }

    //     prevButton.addEventListener('click', () => {
    //         if (currentIndex > 0) {
    //             currentIndex--;
    //             updateCardPosition();
    //         }
    //     });

    //     nextButton.addEventListener('click', () => {
    //         if (currentIndex < cards.length - 1) {
    //             currentIndex++;
    //             updateCardPosition();
    //         }
    //     });

    // updateCardPosition();
  

    // $(document).ready(function () {
    //   $(".slider").slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     arrows: true,
    //     prevArrow:
    //       '<button type="button" class="slick-prev">Previous</button>',
    //     nextArrow: '<button type="button" class="slick-next">Next</button>',
    //   });
    // });