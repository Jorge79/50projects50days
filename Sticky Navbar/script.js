const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

console.log(window.scrollY, nav.offsetHeight);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 200) {
console.log(window.scrollY, nav.offsetHeight);
nav.classList.add('active');
  } else {
    nav.classList.remove('active');
console.log(window.scrollY, nav.offsetHeight);

  }
}