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
        to: function (numericValue) {
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
        slideChange: function () {
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
const priceSliders = document.querySelectorAll('.prices__swiper');
const priceNextButtons = document.querySelectorAll('.prices__button.next');
const pricePrevButtons = document.querySelectorAll('.prices__button.prev');
const pricePaginations = document.querySelectorAll('.prices__pagintaion');
priceSliders.forEach((slider, index) => {
    slider.classList.add(`prices__swiper_${index}`);
    priceNextButtons[index].classList.add(`prices__button_${index}`);
    pricePrevButtons[index].classList.add(`prices__button_${index}`);
    pricePaginations[index].classList.add(`prices__pagintaion_${index}`);
    new Swiper(`.prices__swiper_${index}`, {
        // loop: true,
        pagination: {
            el: `.prices__pagintaion_${index}`,
        },
        spaceBetween: 25,
        slidesPerView: 4,
        navigation: {
            nextEl: `.prices__button_${index}.next`,
            prevEl: `.prices__button_${index}.prev`,
        },
        breakpoints: {
            0: {
                spaceBetween: 17,
                slidesPerView: 'auto',
            },
            798: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
            1230: {
                spaceBetween: 25,
                slidesPerView: 4,
            },
        }
    });
})

const reviewsSliders = document.querySelectorAll('.reviews__swiper');
const reviewsNextButtons = document.querySelectorAll('.reviews__button.next.pc');
const reviewsPrevButtons = document.querySelectorAll('.reviews__button.prev.pc');
const reviewsNextButtonsMobile = document.querySelectorAll('.reviews__button.next.mobile');
const reviewsPrevButtonsMobile = document.querySelectorAll('.reviews__button.prev.mobile');
const reviewsPaginations = document.querySelectorAll('.reviews__pagination.pc');
const reviewsPaginationsMobile = document.querySelectorAll('.reviews__pagination.mobile');
reviewsSliders.forEach((slider, index) => {
    slider.classList.add(`reviews__swiper_${index}`);
    reviewsNextButtons[index].classList.add(`reviews__button_${index}`);
    reviewsPrevButtons[index].classList.add(`reviews__button_${index}`);
    reviewsPaginations[index].classList.add(`reviews__pagination_${index}`);
    reviewsPaginationsMobile[index].classList.add(`reviews__pagination_${index}`);
    reviewsPrevButtonsMobile[index].classList.add(`reviews__button_${index}`);
    reviewsNextButtonsMobile[index].classList.add(`reviews__button_${index}`);
    const reviewsSlider = new Swiper(`.reviews__swiper_${index}`, {
        on: {
            slideChange: function () {
                document.querySelector(`.reviews__pagination_${index}.mobile`).innerHTML = `
                ${this.slides.map((dot, i) => {
                    return `<span class="swiper-pagination-bullet ${i === this.realIndex ? 'swiper-pagination-bullet-active' : ''}"></span>`
                }).join('')}
                `
                document.querySelector(`.reviews__pagination_${index}.pc`).innerHTML = `
                ${this.slides.map((dot, i) => {
                    return `<span class="swiper-pagination-bullet ${i === this.realIndex ? 'swiper-pagination-bullet-active' : ''}"></span>`
                }).join('')}
                `
            },
            resize: function () {
                document.querySelector(`.reviews__pagination_${index}.mobile`).innerHTML = `
                ${this.slides.map((dot, i) => {
                    return `<span class="swiper-pagination-bullet ${i === this.realIndex ? 'swiper-pagination-bullet-active' : ''}"></span>`
                }).join('')}
                `
                document.querySelector(`.reviews__pagination_${index}.pc`).innerHTML = `
                ${this.slides.map((dot, i) => {
                    return `<span class="swiper-pagination-bullet ${i === this.realIndex ? 'swiper-pagination-bullet-active' : ''}"></span>`
                }).join('')}
                `
            }
        },
        breakpoints: {
            0: {
                spaceBetween: 0,
                slidesPerView: 1,
                // navigation: {
                //     nextEl: `.reviews__button_${index}.next.mobile`,
                //     prevEl: `.reviews__button_${index}.prev.mobile`,
                // },
                pagination: {
                    el: `.reviews__pagination_${index}.mobile`,
                },
            },
            606: {
                spaceBetween: 15,
                slidesPerView: 'auto',
                // navigation: {
                //     nextEl: `.reviews__button_${index}.next.pc`,
                //     prevEl: `.reviews__button_${index}.prev.pc`,
                // },
                pagination: {
                    el: `.reviews__pagination_${index}.pc`,
                },
            },
            1022: {
                spaceBetween: 25,
                slidesPerView: 'auto',
                // navigation: {
                //     nextEl: `.reviews__button_${index}.next.pc`,
                //     prevEl: `.reviews__button_${index}.prev.pc`,
                // },
                pagination: {
                    el: `.reviews__pagination_${index}.pc`,
                },
            },
        }
    });
    reviewsNextButtons[index].addEventListener('click', () => {
        reviewsSlider.slideNext();
    })
    reviewsPrevButtons[index].addEventListener('click', () => {
        reviewsSlider.slidePrev();
    })
    reviewsNextButtonsMobile[index].addEventListener('click', () => {
        reviewsSlider.slideNext();
    })
    reviewsPrevButtonsMobile[index].addEventListener('click', () => {
        reviewsSlider.slidePrev();
    })
})

const certificatesSliders = document.querySelectorAll('.certificates__swiper');
const certificatesButtonNext = document.querySelectorAll('.certificates__button.next');
const certificatesButtonPrev = document.querySelectorAll('.certificates__button.prev');
const certificatePaginations = document.querySelectorAll('.certificates__pagination');
const certificateScrollbars = document.querySelectorAll('.certificates__scrollbar-bar');

certificatesSliders.forEach((slider, index) => {
    slider.classList.add(`certificates__swiper_${index}`);
    certificatesButtonNext[index].classList.add(`certificates__button_${index}`);
    certificatesButtonPrev[index].classList.add(`certificates__button_${index}`);
    certificatePaginations[index].classList.add(`certificates__pagination_${index}`);
    certificateScrollbars[index].classList.add(`certificates__scrollbar-bar_${index}`);
    new Swiper(`.certificates__swiper_${index}`, {

        pagination: {
            el: `.certificates__pagination_${index}`,
        },
        allowTouchMove: true,
        spaceBetween: 15,
        navigation: {
            nextEl: `.certificates__button_${index}.next`,
            prevEl: `.certificates__button_${index}.prev`,
        },
        scrollbar: {
            el: `.certificates__scrollbar-bar_${index}`,
            draggable: true,
            dragSize: 309
        },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                scrollbar: {
                    dragSize: 191
                },
            },
            606: {
                slidesPerView: 'auto',
            },
            1022: {
                slidesPerView: 'auto',
                scrollbar: {
                    dragSize: 309
                },
            }
        }
    });
})
// End sliders

// Start tabs
const tabsPanelServices = document.querySelector('.services__tabs');
const tabItemsServices = document.querySelectorAll('.services__tabs-item');
const tabImagesServices = document.querySelectorAll('.services__image');

const tabsPanelImplementations = document.querySelector('.implementation__tabs');
const tabItemsImplementations = document.querySelectorAll('.implementation__tab');
const tabContentsImplementations = document.querySelectorAll('.implementation__content');

const tabsPanelReviews = document.querySelector('.reviews__tabs');
const tabItemsReviews = document.querySelectorAll('.reviews__tabs-link');
const tabContentsReviews = document.querySelectorAll('.reviews__container');
const tabContents2Reviews = document.querySelectorAll('.reviews__controls');

const tabsPanelCertificates = document.querySelector('.certificates__tabs');
const tabItemsCertificates = document.querySelectorAll('.certificates__tabs-link');
const tabsContentsCertificates = document.querySelectorAll('.certificates__title > .buttons');
const tabsContents2Certificates = document.querySelectorAll('.certificates__pagination');
const tabsContents3Certificates = document.querySelectorAll('.certificates__slider');
const tabsContents4Certificates = document.querySelectorAll('.certificates__scrollbar');
const tabsPanelCertificatesMobile = document.querySelector('.certificates__select-list');
const tabItemsCertificatesMobile = document.querySelectorAll('.certificates__select-option');

const pausePlayerReviews = () => {
    const audios = document.querySelectorAll(`.reviews__text-audio`);
    const videos = document.querySelectorAll('.reviews__video > iframe');
    audios.forEach(audioBlock => {
        const audio = audioBlock.querySelector('div').shadowRoot.querySelector('audio');
        const button = audioBlock.querySelector('.play')
        audio.pause();
        if (button.classList.contains('proccessed')) {
            button.classList.remove('proccessed');
        }
        button.classList.add('waiting');
        videos.forEach((video, i) => {
            video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            document.querySelectorAll('.reviews__video-play')[i].style.display = 'flex';
        })
    })

}
const tabs = (tabsPanel, tabsButtons, tabsContent, tabSelector, func = null) => {
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
                    if (func !== null) {
                        func()
                    }
                }
            })
        }
    })
}
tabs(tabsPanelServices, tabItemsServices, tabImagesServices, 'services__tabs-item');
tabs(tabsPanelImplementations, tabItemsImplementations, tabContentsImplementations, 'implementation__tab');
tabs(tabsPanelReviews, tabItemsReviews, tabContentsReviews, 'reviews__tabs-link', pausePlayerReviews);
tabs(tabsPanelReviews, tabItemsReviews, tabContents2Reviews, 'reviews__tabs-link', pausePlayerReviews);
tabs(tabsPanelCertificates, tabItemsCertificates, tabsContentsCertificates, 'certificates__tabs-link');
tabs(tabsPanelCertificates, tabItemsCertificates, tabsContents2Certificates, 'certificates__tabs-link');
tabs(tabsPanelCertificates, tabItemsCertificates, tabsContents3Certificates, 'certificates__tabs-link');
tabs(tabsPanelCertificates, tabItemsCertificates, tabsContents4Certificates, 'certificates__tabs-link');

tabs(tabsPanelCertificatesMobile, tabItemsCertificatesMobile, tabsContentsCertificates, 'certificates__select-option');
tabs(tabsPanelCertificatesMobile, tabItemsCertificatesMobile, tabsContents2Certificates, 'certificates__select-option');
tabs(tabsPanelCertificatesMobile, tabItemsCertificatesMobile, tabsContents3Certificates, 'certificates__select-option');
tabs(tabsPanelCertificatesMobile, tabItemsCertificatesMobile, tabsContents4Certificates, 'certificates__select-option');
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
const phoneInputs = document.querySelectorAll('[data-input="masked"]');
const im = new Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: 'tel'
})
phoneInputs.forEach(input => {
    im.mask(input);
})
// End masked inputs

// Start wave players
const waveContainers = document.querySelectorAll('.reviews__text-audio');
const playVoiceMessageButtons = document.querySelectorAll('.play');

waveContainers.forEach((block, index) => {
    block.classList.add(`reviews__text-audio_${index}`);
    const waveOptions = {
        "container": `.reviews__text-audio_${index}`,
        "height": 76,
        "width": "",
        "splitChannels": false,
        "normalize": false,
        "waveColor": "rgba(175, 175, 175, .5)",
        "progressColor": "rgb(215, 69, 53, 1)",
        "cursorColor": "#ddd5e9",
        "cursorWidth": 0,
        "barWidth": 3,
        "barGap": 5,
        "barRadius": null,
        "barHeight": null,
        "barAlign": "",
        "minPxPerSec": 1,
        "fillParent": true,
        "url": block.dataset.musicUrl,
        "mediaControls": false,
        "autoplay": false,
        "interact": true,
        "dragToSeek": false,
        "hideScrollbar": true,
        "audioRate": 1,
        "autoScroll": true,
        "autoCenter": true,
        "sampleRate": 8000
    }
    const wavesurfer = WaveSurfer.create(waveOptions)
    playVoiceMessageButtons[index].addEventListener('click', () => {
        const audio = document.querySelector(`.reviews__text-audio_${index} > div`).shadowRoot.querySelector("audio");
        playVoiceMessageButtons.forEach((btn, i) => {
            if (i !== index) {
                document.querySelector(`.reviews__text-audio_${i} > div`).shadowRoot.querySelector("audio").pause();
                if (playVoiceMessageButtons[i].classList.contains('proccessed')) {
                    playVoiceMessageButtons[i].classList.remove('proccessed');
                }
                playVoiceMessageButtons[i].classList.add('waiting');
            }
        })
        if (audio.paused) {
            audio.play();
            if (playVoiceMessageButtons[index].classList.contains('waiting')) {
                playVoiceMessageButtons[index].classList.remove('waiting');
            }
            playVoiceMessageButtons[index].classList.add('proccessed');
        } else {
            audio.pause();
            if (playVoiceMessageButtons[index].classList.contains('proccessed')) {
                playVoiceMessageButtons[index].classList.remove('proccessed');
            }
            playVoiceMessageButtons[index].classList.add('waiting');
        }
    })
})
const playVideoReviewButtons = document.querySelectorAll('.reviews__video-play');
const videoReviews = document.querySelectorAll('.reviews__video > iframe');
playVideoReviewButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        videoReviews.forEach((video, i) => {
            video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
            playVideoReviewButtons[i].style.display = 'flex';
        })
        btn.style.display = 'none';
        videoReviews[index].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    })
})
// End wave players

// Start fancybox
Fancybox.bind("[data-fancybox]", {});
// End fancybox

// Start selects
const select = document.querySelector('.certificates__select');
const selectList = document.querySelector('.certificates__select-list');
const selectValue = document.querySelector('.certificates__select-value > .value');
const selectOptions = document.querySelectorAll('.certificates__select-option');
selectList.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('.certificates__select-option')) {
        const option = e.target.closest('.certificates__select-option');
        selectOptions.forEach((btn, index) => {
            if (btn === option) {
                btn.classList.add('active');
                selectValue.textContent = option.textContent;
            } else {
                if (btn.classList.contains('active')) {
                    btn.classList.remove('active');
                }
            }
        })
    }
})
select.addEventListener('click', (e) => {
    select.classList.toggle('active');
})
// End selects

// Start accordion
class Accordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
            alwaysOpen: true,
            duration: 350
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
            const elHeader = e.target.closest('.accordion__header');
            if (!elHeader) {
                return;
            }
            this.toggle(elHeader.parentElement);
        });
    }
    show(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style.display = 'block';
        const height = elBody.offsetHeight;
        elBody.style.height = 0;
        elBody.style.overflow = 'hidden';
        elBody.style.transition = `height ${this._config.duration}ms ease`;
        elBody.classList.add('collapsing');
        el.classList.add('accordion__item_slidedown');
        elBody.offsetHeight;
        elBody.style.height = `${height}px`;
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            el.classList.remove('accordion__item_slidedown');
            elBody.classList.add('collapse');
            el.classList.add('accordion__item_show');
            elBody.style.display = '';
            elBody.style.height = '';
            elBody.style.transition = '';
            elBody.style.overflow = '';
        }, this._config.duration);
    }
    hide(el) {
        const elBody = el.querySelector('.accordion__body');
        if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
            return;
        }
        elBody.style.height = `${elBody.offsetHeight}px`;
        elBody.offsetHeight;
        elBody.style.display = 'block';
        elBody.style.height = 0;
        elBody.style.overflow = 'hidden';
        elBody.style.transition = `height ${this._config.duration}ms ease`;
        elBody.classList.remove('collapse');
        el.classList.remove('accordion__item_show');
        elBody.classList.add('collapsing');
        window.setTimeout(() => {
            elBody.classList.remove('collapsing');
            elBody.classList.add('collapse');
            elBody.style.display = '';
            elBody.style.height = '';
            elBody.style.transition = '';
            elBody.style.overflow = '';
        }, this._config.duration);
    }
    toggle(el) {
        el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
}
new Accordion(document.querySelector('.accordion'), {
    alwaysOpen: false
});

const showMoreFaqButton = document.querySelector('.faq__more');
showMoreFaqButton.addEventListener('click', (e) => {
    showMoreFaqButton.style.display = 'none';
    document.querySelectorAll('.faq__accordion-item.hidden').forEach(item => {
        item.classList.remove('hidden');
    })
})
// End accordion

// Start about
const showMoreAboutBtn = document.querySelector('.simple__more');
const aboutGrayBlock = document.querySelector('.simple__gray');
const aboutWhiteBlock = document.querySelector('.simple__white');
showMoreAboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    aboutGrayBlock.style.display = 'block';
    aboutWhiteBlock.style.display = 'block';
    showMoreAboutBtn.style.display = 'none';
})
// End about