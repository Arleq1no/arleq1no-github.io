
const anchors = document.querySelectorAll('a[href^="#"]');


anchors.forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault(); 

    const targetId = anchor.getAttribute('href').slice(1);  
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({
        top: offset,
        behavior: 'smooth' 
      });
    }
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

//-------------------------------------------anim//

function animateVisibleElements() {
  var elements = document.querySelectorAll('.animate');
  elements.forEach(function(element) {
    var elementPosition = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (elementPosition < windowHeight) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animateVisibleElements);
window.addEventListener('resize', animateVisibleElements);

animateVisibleElements();


//mob menu//

const menu = document.querySelector('.mobile-button');
const submenu = document.querySelector('.header-menu-mobile');
const menuLinks = submenu.querySelectorAll('a');
let is_open = false;

menu.addEventListener('click', () => {
  if (!is_open) {
    submenu.style.display = 'block';
    is_open = true;
  } else {
    submenu.style.display = 'none';
    is_open = false;
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    submenu.style.display = 'none';
    is_open = false;
  });
});

