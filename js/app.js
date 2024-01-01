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

//helpers function to sliders
const num = (e) => {
    return (e % 1) === 0 ? e.toFixed(0) : e.toFixed(1);
}
const changeProgress = (self) => {
    const firstStep = self.realIndex + 1;
    const allStep = self.slides.length;
    const startPercent = firstStep / allStep * 100;
    document.querySelector('.examples__progress > .progressbar').style.width = `${num(startPercent)}%`;
}
//end helpers function to sliders

const advantagesSlider = new Swiper('.advantages-slider', {
    loop: true,
    pagination: {
      el: '.advantages__pagination',
    },
    navigation: {
      nextEl: '.advantages__button.next',
      prevEl: '.advantages__button.prev',
    },
});
const examplesThumbsSlider = new Swiper(".examples__thumbs", {
    spaceBetween: 26,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    autoScrollOffset: 1,
    allowTouchMove: true,
    breakpoints: {
        0: {
          spaceBetween: 15
        },
        1200: {
          spaceBetween: 26
        },
    }
});
const examplesSlider = new Swiper('.examples__slider', {
    pagination: {
      el: '.examples__pagintation',
    },
    navigation: {
      nextEl: '.examples__button.next',
      prevEl: '.examples__button.prev',
    },
    thumbs: {
        swiper: examplesThumbsSlider,
    },
    on: {
        init: function () {
            changeProgress(this)
        },
        slideChange: function() {
            changeProgress(this)
        }
    },
});
const dignitySlider = new Swiper('.dignity__slider', {
    loop: true,
    pagination: {
      el: '.dignity__pagination',
    },
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: {
      nextEl: '.dignity__button.next',
      prevEl: '.dignity__button.prev',
    },
    breakpoints: {
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
        },
        475: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
        606: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
    }
});
// End sliders

// Start tabs
const tabsPanel = document.querySelector('.services__tabs');
const tabItems = document.querySelectorAll('.services__tabs-item');
const tabImages = document.querySelectorAll('.services__image');

tabsPanel.addEventListener('click', (e) => {
    if (e.target.closest('.services__tabs-item')) {
        const btn = e.target.closest('.services__tabs-item')
        tabItems.forEach((tab, index) => {
            if (tab === btn) {
                tab.classList.add('active');
                tabImages[index].classList.add('active');
            } else {
                if (tab.classList.contains('active')) {
                    tab.classList.remove('active');
                }
                if (tabImages[index].classList.contains('active')) {
                    tabImages[index].classList.remove('active');
                }
            }
        })
    }
})
// End tabs