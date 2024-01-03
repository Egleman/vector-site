// Start range-sliders
const rangeSliders = document.querySelectorAll('[data-block="calc-slider"]');
const rangeInputs = document.querySelectorAll('[data-input="calc-slider"]');
const hiddenSquareInputs = document.querySelectorAll('[data-input="square"]');
const rangeSliderOptions = {
    start: [25],
    padding: [1, 3],
    connect: 'lower',
    range: {
        'min': [0],
        'max': [83]
    }
}
rangeSliders.forEach((slider, index) => {
    noUiSlider.create(slider, rangeSliderOptions);
    slider.noUiSlider.on('update', function (values, handle) {
        rangeInputs[index].value = `${Math.round(values[handle])} м2`;
        hiddenSquareInputs[index].value = `${Math.round(values[handle])}`;
    });
    slider.noUiSlider.on('set', function (values, handle) {
        rangeInputs[index].value = `${Math.round(values[handle])} м2`;
    });
    rangeInputs[index].addEventListener('change', () => {
        if (+rangeInputs[index].value > 0 && +rangeInputs[index].value < 80) {
            slider.noUiSlider.set(+rangeInputs[index].value);
        } else {
            slider.noUiSlider.set(80);
        }
    })
})
const calcSliderOptions = {
    start: [45],
    padding: [4, 2],
    connect: 'lower',
    tooltips: {
        to: function(numericValue) {
            return `${numericValue.toFixed(0)} кв.м2`;
        }
    },
    range: {
        'min': [-4],
        'max': [82]
    }
}
const calcSlider = document.getElementById('calc-slider');
noUiSlider.create(calcSlider, calcSliderOptions);
calcSlider.noUiSlider.on('update', function (values, handle) {
    hiddenSquareInputs[2].value = `${Math.round(values[handle])}`;
});
// End range-sliders

// Start counters
const plusButtons = document.querySelectorAll('[data-button="count+"]');
const minusButtons = document.querySelectorAll('[data-button="count-"]');
const counters = document.querySelectorAll('[data-block="result"]');
const hiddenCountInputs = document.querySelectorAll('[data-input="count"]');

plusButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        counters[index].textContent = Number(counters[index].textContent) + 1;
        hiddenCountInputs[index].value = `${Number(counters[index].textContent)}`;
    })
})
minusButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (Number(counters[index].textContent) !== 1) {
            counters[index].textContent = Number(counters[index].textContent) - 1;
            hiddenCountInputs[index].value = `${Number(counters[index].textContent)}`;
        }
    })
})
// End counters

// Start sliders
// helpers function for sliders
const num = (e) => {
    return (e % 1) === 0 ? e.toFixed(0) : e.toFixed(1);
}
const changeProgress = (self) => {
    const firstStep = self.realIndex + 1;
    const allStep = self.slides.length;
    const startPercent = firstStep / allStep * 100;
    document.querySelector('.examples__progress > .progressbar').style.width = `${num(startPercent)}%`;
}
// end helpers function for sliders

const advantagesSlider = new Swiper('.advantages-slider', {
    // loop: true,
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
    // loop: true,
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
const servicesSlider = new Swiper('.services__swiper', {
    // loop: true,
    autoHeight: true,
    pagination: {
      el: '.services__pagination',
    },
    navigation: {
      nextEl: '.services__button.next',
      prevEl: '.services__button.prev',
    },
});
const implementationTabsSlider = new Swiper(".implementation__tabs", {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    autoScrollOffset: 1,
    allowTouchMove: true,
    breakpoints: {
        798: {
          spaceBetween: 10
        },
        1230: {
          spaceBetween: 45
        },
    }
});
const implementationSliders = document.querySelectorAll('.implementation__slider');
const implementationPaginations = document.querySelectorAll('.implementation__pagintaion');
const implementationNextButtons = document.querySelectorAll('.implementation__button.next');
const implementationPrevButtons = document.querySelectorAll('.implementation__button.prev');
implementationSliders.forEach((slider, index) => {
    slider.classList.add(`implementation__slider_${index}`);
    implementationPaginations[index].classList.add(`implementation__pagintaion_${index}`);
    implementationNextButtons[index].classList.add(`implementation__button_${index}`);
    implementationPrevButtons[index].classList.add(`implementation__button_${index}`);
    new Swiper(`.implementation__slider_${index}`, {
        autoHeight: true,
        pagination: {
          el: `.implementation__pagintaion_${index}`,
        },
        navigation: {
          nextEl: `.implementation__button_${index}.next`,
          prevEl: `.implementation__button_${index}.prev`,
        },
    });
})

const calcTypesSlider = new Swiper(".calc__types-slider", {
    // slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    autoScrollOffset: 1,
    
    breakpoints: {
        0: {
            allowTouchMove: true,
            spaceBetween: 25,
            slidesPerView: 'auto',
        },
        798: {
            allowTouchMove: false,
            spaceBetween: 25,
            slidesPerView: 4,
        },
        1230: {
            allowTouchMove: false,
            spaceBetween: 32,
            slidesPerView: 4,
        }
    }
});
const calcManufacturerSlider = new Swiper(".calc__manufacturer-slider", {
    // slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    autoScrollOffset: 1,
    breakpoints: {
        0: {
            allowTouchMove: true,
            spaceBetween: 40,
            slidesPerView: 'auto',
        },
        798: {
            allowTouchMove: false,
            spaceBetween: 0,
            slidesPerView: 7,
        },
        1230: {
            allowTouchMove: false,
            spaceBetween: 0,
            slidesPerView: 7,
        }
    }
});
// End sliders

// Start tabs
const tabsPanelServices = document.querySelector('.services__tabs');
const tabItemsServices = document.querySelectorAll('.services__tabs-item');
const tabImagesServices = document.querySelectorAll('.services__image');

const tabsPanelImplementations = document.querySelector('.implementation__tabs');
const tabItemsImplementations = document.querySelectorAll('.implementation__tab');
const tabContentsImplementations = document.querySelectorAll('.implementation__content');

const tabs = (tabsPanel, tabsButtons, tabsContent, tabSelector) => {
    tabsPanel.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest(`.${tabSelector}`)) {
            const btn = e.target.closest(`.${tabSelector}`);
            tabsButtons.forEach((tab, index) => {
                if (tab === btn) {
                    tab.classList.add('active');
                    tabsContent[index].classList.add('active');
                } else {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active');
                    }
                    if (tabsContent[index].classList.contains('active')) {
                        tabsContent[index].classList.remove('active');
                    }
                }
            })
        }
    })
}
tabs(tabsPanelServices, tabItemsServices, tabImagesServices, 'services__tabs-item');
tabs(tabsPanelImplementations, tabItemsImplementations, tabContentsImplementations, 'implementation__tab');
// End tabs

// Start Slider modals
const modalImplementationLinks = document.querySelectorAll('.implementation__content-more');
const modalsImplementations = document.querySelectorAll('.implementation__modal');
const modalImplementationsCloseButtons = document.querySelectorAll('.implementation__modal-close');
modalImplementationLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        modalsImplementations[index].classList.add('active');
    })
})
modalImplementationsCloseButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modalsImplementations[index].classList.contains('active')) {
            modalsImplementations[index].classList.remove('active');
        }
    })
})
// End Slider modals

// Start calc
const calcTypeButtons = document.querySelectorAll('.calc__types-slide');
const calcTypeInput = document.querySelector('[data-input="calc-type"]');
const calcTypeTabPanel = document.querySelector('.calc__types-slider');

const calcManufacturerTabPanel = document.querySelector('.calc__manufacturer-slider');
const calcManufacturerButtons = document.querySelectorAll('.calc__manufacturer-tab');
const calcManufacturerInput = document.querySelector('[data-input="manufacturer"]');

const calcTabsValues = (tabPanel, buttons, input, selector) => {
    tabPanel.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest(`.${selector}`)) {
            const btn = e.target.closest(`.${selector}`);
            buttons.forEach((tab, index) => {
                if (tab === btn) {
                    tab.classList.add('active');
                    input.value = tab.dataset.calcButton;
                } else {
                    if (tab.classList.contains('active')) {
                        tab.classList.remove('active');
                    }
                }
            })
        }
    })
}
calcTabsValues(calcTypeTabPanel, calcTypeButtons, calcTypeInput, 'calc__types-slide');
calcTabsValues(calcManufacturerTabPanel, calcManufacturerButtons, calcManufacturerInput, 'calc__manufacturer-tab');
// End calc

// Start masked inputs



// End masked inputs