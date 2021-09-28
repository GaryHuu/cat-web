// Header
function header() {
  const burgerButton = document.querySelector('#burger');
  const navbarToggle = document.querySelector('nav');
  if (!burgerButton || !navbarToggle) return;
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('toggle');
    navbarToggle.classList.toggle('active');
  });

  //  When reload page then check location page
  if (window.pageYOffset > 680) {
    document.querySelector('header').style.backgroundColor = '#0eb493';
    document.querySelector('.header__slogan').style.color = '#fff';
    document.querySelector('.header__slogan').style.borderColor = '#fff';
  }

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 680) {
      document.querySelector('header').style.backgroundColor = '#0eb493';
      document.querySelector('.header__slogan').style.color = '#fff';
      document.querySelector('.header__slogan').style.borderColor = '#fff';
    } else {
      document.querySelector('header').style.backgroundColor = '#1016363f';
      document.querySelector('.header__slogan').style.color = '#546365';
      document.querySelector('.header__slogan').style.borderColor = '#546365';
    }
  });
}

header();

// Banner
function banner() {
  $('#slider-banner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  function textAnimationToggle() {
    document.querySelector('.banner__content').classList.toggle('active');
  }

  textAnimationToggle();

  $('#slider-banner').on(
    'beforeChange',
    function (event, slick, currentSlide, nextSlide) {
      textAnimationToggle();
      setTimeout(() => {
        textAnimationToggle();
      }, 300);
    }
  );
}

banner();

// Features
function features() {
  $('#slider-features').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

features();

// Meet our team
function meetOurTeam() {
  $('#meet-our-team-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

meetOurTeam();

// Some Fun Facts
function someFunFacts(e) {
  const counter = document.querySelectorAll('.some-fun-facts__group h3');
  window.addEventListener('scroll', counterNumber);
  function counterNumber() {
    if (window.pageYOffset <= 3485 && window.pageYOffset >= 2800) {
      setTimeout(() => {
        const arrayCount = [];
        counter.forEach((x) => {
          arrayCount.push(x.innerHTML);
          x.innerHTML = 0;
          x.style.opacity = 1;
        });
        const handleCount = [];
        counter.forEach((x, index) => {
          let count = parseInt(x.innerHTML);
          handleCount[index] = setInterval(() => {
            if (count == arrayCount[index] - 1) {
              clearInterval(handleCount[index]);
            }
            count = count + 1;
            x.innerHTML = count;
          }, 1);
        });
        window.removeEventListener('scroll', counterNumber);
      }, 200);
    }
  }
}

someFunFacts();
