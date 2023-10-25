/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Kontrola zda existuje 'navToggle'*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    navToggle.classList.toggle('invisible');
  });
}

/*===== MENU HIDDEN =====*/
/* Kontrola zda existuje 'navClose' */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    navToggle.classList.toggle('invisible');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // Když se klikne na kterýkoliv 'nav__link', odstraní se z menu classa 'show-menu' = schová se zpět nahoru (top:-100%);
  navMenu.classList.remove('show-menu');
  navToggle.classList.remove('invisible');
};
navLink.forEach(n => n.addEventListener('click', linkAction));



/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');

}

window.addEventListener('scroll', bgHeader);


/*=============== GSAP ANIMATION ===============*/

gsap.from('.home__clouds', 1.5, {opacity: 0, y: -300, delay: .2})
gsap.from('.home__stars', 1.5, {opacity: 0, y: -300, delay: .4})
gsap.from('.home__stone', 1.5, {opacity: 0, y: 300, delay: .2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__castle', 1.5, {opacity: 0, y: -300, delay: .6, ease: 'bounce.out'})
gsap.from('.home__moon', 1.5, {opacity: 0, y: 300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__titles', 1.5, {opacity: 0, y: -300, delay: 1.5, ease: 'elastic.out(1, .5)'})

gsap.from('.home__data', 1.5, {opacity: 0, y: 200, delay: 2, ease: 'elastic.out(1, .5)'})