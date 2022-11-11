// load content after finished loading
const container = document.querySelector('#container');
const loading = document.querySelector('#loading');
console.log(container);

container.style.display = 'none';

window.addEventListener('DOMContentLoaded', () => {
  loading.style.display = 'none';

  console.log('i am loading');
  container.style.display = 'block';

  setInterval(function () {
    const show = document.querySelector('span[data-show]');
    const showNext =
      show.nextElementSibling || document.querySelector('span:first-child');

    const up = document.querySelector('span[data-up]');

    if (up) {
      up.removeAttribute('data-up');
    }
    show.removeAttribute('data-show');
    show.setAttribute('data-up', '');

    showNext.setAttribute('data-show', '');
  }, 2000);
});

//typing effect start
// const h1 = document.querySelector('h1');
// h1.innerHTML = h1.textContent.replace(/\S/g, '<span>$&</span>');

// let delay = 0;
// document.querySelectorAll('span').forEach((span, index) => {
//   delay += 0.1;

//   if (index === 6) delay += 0.3;

//   span.style.setProperty('--delay', `${delay}s`);
// });

//
