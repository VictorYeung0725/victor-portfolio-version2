// load content after finished loading
const container = document.querySelector('#container');
const loading = document.querySelector('#loading');
// const imgProfil = document.getElementsByTagName('img');

console.log(container);

container.style.display = 'none';
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(hideLoading, 1500);

  function hideLoading() {
    loading.style.display = 'none';
    container.style.display = 'block';
  }

  // var msnry;
  // // initialize Masonry after all images have loaded
  // imagesLoaded(container, function () {
  //   msnry = new Masonry(imgProfil);
  // });

  // loading.style.display = 'none';
  // container.style.display = 'block';

  // text animation
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
