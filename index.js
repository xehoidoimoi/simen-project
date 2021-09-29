
// TODO Slide show Slider-1
const $owlCarousel = $("#slider-1 .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      navText: [
            '<i class="slide__icon btn-left fas fa-chevron-left"></i>',
            '<i class="slide__icon btn-right fas fa-chevron-right"></i>',
      ],
      responsive: {
            // breakpoint from 0 up
            0: {
                  nav: false,
            },
            // breakpoint from 480 up
            480: {
                  nav: false,
            },
            // breakpoint from 719 up
            719: {
                  nav: false,
            },
            // breakpoint from 721 up
            721: {
            },
            // breakpoint from 768 up
            768: {
            },
            1023: {

            },
            1240: {
            },
      }
});
$owlCarousel.on('changed.owl.carousel', function (e) {
      e.preventDefault();
      let index = e.item.index - 2;
      // ? First
      $('.slide__show-heading--first').removeClass('animate__animated animate__bounceInRight');
      $('.slide__show-heading--first').eq(index).addClass('animate__animated animate__bounceInRight');

      $('.slide__show-desc--first').removeClass('animate__animated animate__bounceInLeft');
      $('.slide__show-desc--first').eq(index).addClass('animate__animated animate__bounceInLeft');

      $('.slide__show-link--first').removeClass('animate__animated animate__bounceInUp');
      $('.slide__show-link--first').eq(index).addClass('animate__animated animate__bounceInUp');
      // ? Second
      $('.slide__show-heading--second').removeClass('animate__animated animate__slideInUp');
      $('.slide__show-heading--second').eq(index).addClass('animate__animated animate__slideInUp');

      $('.slide__show-link--second').removeClass('animate__animated animate__slideInUp');
      $('.slide__show-link--second').eq(index).addClass('animate__animated animate__slideInUp');
      // ? Third
      $('.slide__show-heading--third').removeClass('animate__animated animate__bounceInRight');
      $('.slide__show-heading--third').eq(index - 1).addClass('animate__animated animate__bounceInRight');

      $('.slide__show-desc--third').removeClass('animate__animated animate__bounceInUp');
      $('.slide__show-desc--third').eq(index - 1).addClass('animate__animated animate__bounceInUp');

      $('.slide__show-link--third').removeClass('animate__animated animate__bounceInUp');
      $('.slide__show-link--third').eq(index - 1).addClass('animate__animated animate__bounceInUp');
})

// TODO Product-type
const productTypeItem = document.querySelectorAll('.container__product-type-item');
const productList = document.querySelectorAll('.container__product-list');
productTypeItem.forEach((item, index) => {
      item.onclick = () => {
            const productTypeItemActive = document.querySelector('.container__product-type-item.active');
            productTypeItemActive.classList.remove('active');
            item.classList.add('active');

            const productListItem = productList[index];
            const productListActive = document.querySelector('.container__product-list.active');
            productListActive.classList.remove('active');
            productListItem.classList.add('active');
      }
})

// TODO Product: when hover icon product action to show tooltip
const getParent = (element, selector) => {
      while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                  return element.parentElement;
            }
            element = element.parentElement;
      }
}

const itemAction = document.querySelectorAll('.container__product-action-item');
itemAction.forEach(action => {
      action.onmouseover = () => {
            const productInner = getParent(action, '.container__product-inner');
            productInner.style.overflow = 'initial';
            action.onmouseout = () => {
                  productInner.style.overflow = 'hidden';
            }
      };
})

// Todo Load More
// const loadMore = $('.btn__load-more');

// $(function () {
//       $(".container__product-item").slice(0, 10).show();
//       loadMore.on('click', function (e) {
//             e.preventDefault();
//             $(".container__product-item:hidden").slice(0, 5).fadeIn();
//             if ($(".container__product-item:hidden").length == 0) {
//                   loadMore.fadeOut('slow');
//             }
//       });
// });

// TODO Slide show Slider-2
const $owlCarousel2 = $("#slider-2 .owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      dots: false,
      margin: 28,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      navText: [
            '<i class="fas fa-long-arrow-alt-left  slider-2 slider-2__btn-left"></i>',
            '<i class="fas fa-long-arrow-alt-right  slider-2 slider-2__btn-right"></i>',
      ],
      responsive: {
            // breakpoint from 0 up
            0: {
                  items: 1,
            },
            // breakpoint from 480 up
            480: {
                  items: 1,
            },
            // breakpoint from 768 up
            768: {
                  items: 2,
            },
            1023: {

            },
            1240: {

            },
      }
});

// TODO Slide show Slider-3 (Slider Footer)
const $owlCarousel3 = $("#slider-3 .owl-carousel").owlCarousel({
      items: 6,
      loop: true,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      navText: [
            '<i class="fas fa-long-arrow-alt-left  slider-2 slider-2__btn-left"></i>',
            '<i class="fas fa-long-arrow-alt-right  slider-2 slider-2__btn-right"></i>',
      ],
      responsive: {
            // breakpoint from 0 up
            0: {
                  items: 2,
            },
            // breakpoint from 480 up
            480: {
                  items: 2,
            },
            // breakpoint from 768 up
            768: {
                  items: 4,
            },
            1023: {

            },
            1240: {

            },
      }
});

// TODO Nav To Top Menu
const navTop = document.querySelector('.nav-top');
// ? Hide or Show navTop
window.onscroll = function () {
      if (document.documentElement.scrollTop > 70 || document.body.scrollTop > 70) {
            navTop.style.display = 'block';
      } else {
            navTop.style.display = 'none';
      }
};

// ? Scroll Top when click
navTop.onclick = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
}

// ! ************Responsive**************
//  Todo --------Table Pro----------------------------
const menuBars = document.querySelector('.sub-header__bars-icon');
const menuBarsList = document.querySelector('.sub-header__bars-list');
const overlay = document.querySelector('.overlay');
menuBars.onclick = () => {
      menuBarsList.classList.toggle('active-1');
      overlay.classList.add('active-1');
}

overlay.onclick = () => {
      overlay.classList.remove('active-1');
      menuBarsList.classList.remove('active-1');
}

// !----------------------------
const toggleIcon = document.querySelectorAll('.sub-header__bars-item-icon');
console.log(toggleIcon)
const menuBarsListParent = document.querySelector('.sub-header__bars-item-list');
console.log(menuBarsListParent)
toggleIcon.forEach(item => {
      item.onclick = function () {
            item.classList.toggle('active');
            const parentElement = this.parentElement.nextElementSibling;
            const listChild = parentElement.querySelector('.sub-header__bars-item-child-list');
            console.log(listChild)
            if (parentElement.style.height) {
                  parentElement.style.height = null;
            } else {
                  // parentElement.style.height = listChild ? parseInt(parentElement.scrollHeight + listChild.scrollHeight) + 'px' : parentElement.scrollHeight + 'px';
                  parentElement.style.height = parentElement.scrollHeight + 'px';
            }
      }
});
