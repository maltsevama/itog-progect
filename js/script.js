/*========== значок меню на панели навигации ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== ссылки ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== Панель навигации==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== удалить значение меню на панели навигации при нажатии на ссылку в панели навигации (прокрутка) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== темная тема ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

const app = Vue.createApp({
    methods: {
      showCurrentRating(rating) {
        this.currentSelectedRating =
          rating === 0
            ? this.currentSelectedRating
            : "Click to select " + rating + " stars";
      },
      setCurrentSelectedRating(rating) {
        this.currentSelectedRating = "You have Selected: " + rating + " stars";
      }
    },
    computed: {
      currentRatingText() {
        return this.rating
          ? "You have selected " + this.rating + " stars"
          : "No rating selected";
      },
      mouseOverRatingText() {
        return this.mouseOverRating
          ? "Click to select " + this.mouseOverRating + " stars"
          : "No Rating";
      }
    },
    data() {
      return {
        rating: null,
        resetableRating: 2,
        currentRating: "No Rating",
        mouseOverRating: null
      };
    }
  });
  app.component("star-rating", VueStarRating.default);
  
  app.mount("#app");