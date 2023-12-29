// Start Hero-section slider
const heroSlider = document.getElementById('hero-slider');
const heroInput = document.querySelector('.hero__calc-input');
noUiSlider.create(heroSlider, {
    start: [25],
    padding: [1, 3],
    connect: 'lower',
    range: {
        'min': [0],
        'max': [83]
    }
});
heroSlider.noUiSlider.on('update', function (values, handle) {
    heroInput.value = `${Math.round(values[handle])} м2`
});
heroSlider.noUiSlider.on('set', function (values, handle) {
    heroInput.value = `${Math.round(values[handle])} м2`
});
heroInput.addEventListener('change', () => {
    if (+heroInput.value > 0 && +heroInput.value < 80) {
        heroSlider.noUiSlider.set(+heroInput.value);
    } else {
        heroSlider.noUiSlider.set(80);
    }
})
// End Hero-section slider

// Start counters
const plusButtons = document.querySelectorAll('[data-button="count+"]');
const minusButtons = document.querySelectorAll('[data-button="count-"]');
const counters = document.querySelectorAll('[data-block="result"]');

plusButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        counters[index].textContent = Number(counters[index].textContent) + 1;
    })
})
minusButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (Number(counters[index].textContent) !== 1) {
            counters[index].textContent = Number(counters[index].textContent) - 1;
        }
    })
})
// End counters

// Start sliders
const advantagesSlider = new Swiper('.advantages-slider', {
    loop: true,
  
    pagination: {
      el: '.advantages__pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.advantages__button.next',
      prevEl: '.advantages__button.prev',
    },
  });

// End sliders