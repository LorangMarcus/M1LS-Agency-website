// smooth scroll start
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// smooth scroll end

const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault();
      setTimeout(function() {
          window.location.href = item.href;
      }, 500); 

      

      const id = item.id;

      const menuLine = document.querySelector('.menu-line');

      switch(id) {
          case 'home':
             menuLine.style.transform = 'translate(-128px) scale(0.0994, 1)';
             break;
          case 'work':
             menuLine.style.transform = 'translate(-46px) scale(0.0994, 1)';
             break;
           case 'service':
               menuLine.style.transform = 'translate(40px) scale(0.0994, 1)';
           break;
           case 'about':
               menuLine.style.transform = 'translate(130px) scale(0.0994, 1)';
           break;
      }
  });
});



navItems.forEach(item => {

    item.addEventListener('click', function() {
        const foggyOverlay = document.querySelector('.foggy-overlay');
        const Container = document.querySelector('.container')
   
        foggyOverlay.style.opacity = '1';
        foggyOverlay.style.visibility = 'visible';

        Container.style.scale = 0.95;

    });
   });
   


var textWrapper = document.querySelector('.text-effect');
var textWrapper2 = document.querySelector('.text-effect-2')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

var textEffectLetters = Array.from(document.querySelectorAll('.text-effect .letter'));
var textEffect2Letters = Array.from(document.querySelectorAll('.text-effect-2 .letter'));

anime.timeline({loop: false})
 .add({
  targets: textEffectLetters,
  translateY: [-120,0],
  opacity: [0,1], 
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 20 * i,
 })
 .add({
  targets: textEffect2Letters,
  translateY: [-20,0],
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1400,
  delay: (el, i) => 30 * i,
 })



//lazy load function
const lazyLoadImages = () => {
  const imageTargets = document.querySelectorAll('img');
 
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
 
        img.setAttribute('src', src);
        observer.disconnect();
      }
    });
  });
 
  imageTargets.forEach(target => intersectionObserver.observe(target));
 };
 
 const lazyLoadBackgrounds = () => {
  const backgroundTargets = [].slice.call(document.querySelectorAll(".bento-box, .bento-box-second, .bento-box-responsive"));
 
  if ("IntersectionObserver" in window) {
    let backgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var bgImage = entry.target.getAttribute('data-bg');
          entry.target.style.backgroundImage = "url(" + bgImage + ")";
          backgroundObserver.unobserve(entry.target);
        }
      });
    });
 
    backgroundTargets.forEach(function(backgroundTarget) {
      backgroundObserver.observe(backgroundTarget);
    });
  }
 };
 
 document.addEventListener("DOMContentLoaded", function() {
  lazyLoadImages();
  lazyLoadBackgrounds();
 });
 