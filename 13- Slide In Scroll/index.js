const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function checkSlide(e){
      sliderImages.forEach(image => {
        slideAt = window.scrollY + window.innerWidth - image.height /2;
        const imageBottom = image.offsetTop + image.height;
        const ishalfshown = slideAt > image.offsetTop;
        const isNotScrolled = window.scrollY < imageBottom;
        if(ishalfshown && isNotScrolled){
          image.classList.add('active');
        }else{
          image.classList.remove('active');
        }
      });
  }

  window.addEventListener('scroll', debounce(checkSlide));