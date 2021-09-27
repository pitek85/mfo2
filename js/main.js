// VARIABLES
let banks = document.querySelector('#banks');
let mfks = document.querySelector('#mfks');
let banksTrigger = document.querySelector('#banks-trigger');
let mfksTrigger = document.querySelector('#mfks-trigger');
let sidebar = document.querySelector('.sidebar');

let headerBurger = document.querySelector('.header_burger');
let menuList = document.querySelector('.menu_list');
let body = document.querySelector('body');
let menuItem = document.querySelectorAll('#submenu');
let submenuBg = document.querySelector('.submenu_bg');
let submenuImg = document.querySelector('.submenu_img');

let offerSend = document.querySelector('.offer_send')

// BURGER MENU
let burgerFunc = function () {
  headerBurger.addEventListener('click', function(e) {
    headerBurger.classList.toggle('burger_active');
    body.classList.toggle('active')
    menuList.classList.toggle('list_active')
  });
};

// SIDEBAR IN .partners BLOCK
let sidebarFunc = function () { 
  banksTrigger.addEventListener('click', function(e) {
    e.preventDefault;

    mfks.classList.remove('_visible')
    sidebar.classList.remove('_second-tab')
    banks.classList.add('_visible')
    console.log('sdasdas');

  })
  
  mfksTrigger.addEventListener('click', function(e) {
    e.preventDefault;

    mfks.classList.add('_visible')
    sidebar.classList.add('_second-tab')
    banks.classList.remove('_visible')
    console.log('jopa');
  })
};

// SUBMENU BG AND IMG
let submenuFunc = function () {
  for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("mouseover", function() {
      submenuBg.style.display = 'block';
      submenuImg.style.display = 'block';
    });
    menuItem[i].addEventListener("mouseout", function() {
      submenuBg.style.display = 'none';
      submenuImg.style.display = 'none';
    });
  }
}

// SWIPER
const reviewsSwiper = new Swiper('.reviews-swiper', {
  loop: true,
  slidesPerView: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: { 
      slidesPerView: 1,
      spaceBetween: 300,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    
    
  }
});

const newsSwiper = new Swiper('.news-swiper', {
  loop: false,
  slidesPerView: 3,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.news-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 500,
    }
  }
});

let menu = ['КРЕДИТЫ', 'займы', 'кредитные карты', 'СТРАХОВАНИЕ', 'ИПОТЕКА', 'вклады']
const offersSwiper = new Swiper('.offers-swiper', {
  slidesPerView: 1,

  pagination: {
    el: '.offers_categories',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span style="text-align: center;" class="' + className + '">' + (menu[index]) + '</span>';
      },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    draggable: true,
    el: '.offers-scrollbar',
  },
});


// LAUNCH FUNCTIONS
window.onload = function() {
  burgerFunc();
  submenuFunc();
  sidebarFunc();
};