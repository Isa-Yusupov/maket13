const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider(){
  if(window.innerWidth <= 767 && slider.dataset.mobile == 'false'){
    mySwiper = new Swiper(slider, {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    slider.dataset.mobile = 'true';
  }

  if(window.innerWidth > 767){
    slider.dataset.mobile = 'false';
    
    if(slider.classList.contains('swiper-initialized')){
      mySwiper.destroy();
    }
  }
};


mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
})


const container = document.querySelector('.swiper');
const opened = document.querySelector('#open');
const arrow = document.querySelector('.btn-arrow')

opened.addEventListener('click', function (evt) {
  evt.preventDefault()
  container.classList.toggle('opened-content')
  arrow.classList.toggle('arrow-rotate')
  if (container.classList.contains('opened-content')) {
    opened.textContent = 'Показать все'
  } else {
    opened.textContent = 'Скрыть'
  }
})