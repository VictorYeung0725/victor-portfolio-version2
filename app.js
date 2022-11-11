// load content after finished loading
const container = document.querySelector('#container');
const loading = document.querySelector('#loading');
console.log(container);

container.style.display = 'none';

// const myTimeout = setTimeout(hideLoading, 3000);

// function hideLoading() {
//   loading.style.display = 'none';
//   container.style.display = 'block';
// }

document.addEventListener('DOMContentLoaded', () => {
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
