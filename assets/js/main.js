/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img,.user-data',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal(' .card, .contact__input',{interval: 200}); 

/* =========== User Data =========== */

const counters = [...document.querySelectorAll(".user-data .number")];
const speed = 5000; // change animation speed here

const start = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
};

window.addEventListener(
  "scroll",
  () => {
    if (window.pageYOffset >= 250) {
      start();
    }
  },
  { passive: true }
);

/* ========== Swiper =========== */
const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-button-prev",
    prevEl: ".custom-button-next",
  },
  breakpoints: {
    567: {
      slidesPerView: 2,
    },
    996: {
      slidesPerView: 3,
    },
  },
});


// card
