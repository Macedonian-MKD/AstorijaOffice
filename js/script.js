
// Mobile Nav 
const header = document.querySelector('.header');
const openMobileMenu = document.querySelector('.openMenu');
const closeMobileMenu = document.querySelector('.closeMenu');

openMobileMenu.addEventListener('click', function(){
  header.classList.add('nav-open');
});

closeMobileMenu.addEventListener('click', function(){
  header.classList.remove('nav-open');
})


const allNavLinks = document.querySelectorAll('.nav-list-item');
allNavLinks.forEach(function(navLink){
  navLink.addEventListener('click', function(){
    header.classList.remove('nav-open');
  })
})

// Smooth scrolling
const allLinks = document.querySelectorAll('a:link');
for(const link of allLinks){
  link.addEventListener('click', clickHandler);
}

function clickHandler(event){
  event.preventDefault();
  const href = this.getAttribute('href');
  if(href === "#"){
    window.scrollTo({top:0, behavior:"smooth"});
  }
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({top:offsetTop, behavior:"smooth"});
}


const sectionHero = document.querySelector('.section-hero');
const observer = new IntersectionObserver(function(entries){
  const ent = entries[0];
  if(ent.isIntersecting === false){
      header.classList.add('sticky');
  }

  if(ent.isIntersecting === true){
    header.classList.remove('sticky');
}

}, {
  root:null,
  threshold: 0,
  rootMargin: '-80px'
})
observer.observe(sectionHero);