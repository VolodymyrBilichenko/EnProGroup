var image = document.getElementsByClassName('thumbnail');

new simpleParallax(image, {
    scale: 1.2,
    delay: .6,
    maxTransition: 150,
    transition: 'cubic-bezier(0,0,0,1)',
});

AOS.init({
    once: true
});

function activeSwiper(className, settings) {
    if(document.querySelector(className)) {
        new Swiper(className, settings);
    }
}

activeSwiper(".swiper.team", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        }
    }
})

activeSwiper(".swiper.else-news", {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
            },
        }
    }
})

activeSwiper(".swiper.else-articles", {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        },
    }
})

activeSwiper(".swiper.swiper-banner", {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
})

activeSwiper(".projectSwiper", {
    spaceBetween: 15,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
})
//     spaceBetween: 15,
//     slidesPerView: 1,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
//     breakpoints: {
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//         }
//     }
// });

activeSwiper(".mySwiper-about", {
    cssMode: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // mousewheel: true,
    keyboard: true,
})


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.select__head').forEach((item) => {
        item.onclick = _ => {
            item.closest('.select').classList.toggle('active')
        }
    })
})


// burger menu 

document.getElementById('burgerBtn').addEventListener('click', function () {
    const headers = document.querySelector("header");

    document.getElementById('burgerMenu').classList.toggle('hidden');
    headers.classList.toggle("lgs:bg-blue-500", "lgs:border-b-2", "lgs:border-b-whiteOp-300");
});

// header project

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.projectsButton');
    const menus = document.querySelectorAll('.projectsMenu');

    buttons.forEach((button, index) => {
        const menu = menus[index];

        button.addEventListener('click', function () {
            menu.classList.toggle('hidden');
        });

        document.addEventListener('click', function (event) {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.querySelector("header");

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 0) {
//             header.classList.add("bg-blue-500", "border-b", "border-b-whiteOp-300");
//             header.classList.remove("lg:bg-transparent", "lg:border-none");
//         } else {
//             header.classList.remove("bg-blue-500", "border-b", "border-b-whiteOp-300");
//             header.classList.add("lg:bg-none", "lg:border-none");
//         }
//     });
// });

//

const toggleProjects = document.getElementById('toggleProjects');
const projectsBody = document.getElementById('projectsBody');

toggleProjects.addEventListener('click', function () {
    projectsBody.classList.toggle('hidden');
});


// intelInput

const input = document.querySelector("#phone");
if (input) {
    window.intlTelInput(input, {
        initialCountry: "ua",
        strictMode: true,
        utilsScript: "/intl-tel-input/js/utils.js?1715508103106" // just for formatting/placeholders etc
    });
}

const inputs = document.querySelector("#phone-index");
if (inputs) {
    window.intlTelInput(inputs, {
        initialCountry: "ua",
        strictMode: true,
        utilsScript: "/intl-tel-input/js/utils.js?1715508103106" // just for formatting/placeholders etc
    });
}

const inputt = document.querySelector("#phone-modal");
if (inputs) {
    window.intlTelInput(inputt, {
        initialCountry: "ua",
        strictMode: true,
        utilsScript: "/intl-tel-input/js/utils.js?1715508103106" // just for formatting/placeholders etc
    });
}

const inputts = document.querySelector("#phone-modals");
if (inputs) {
    window.intlTelInput(inputts, {
        initialCountry: "ua",
        strictMode: true,
        utilsScript: "/intl-tel-input/js/utils.js?1715508103106" // just for formatting/placeholders etc
    });
}


document.querySelectorAll('.open-modal').forEach(item => {
    item.onclick = () => {
        document.querySelector(`.modal-${item.getAttribute('data-modal')}`).classList.remove("opacity-0")
        document.querySelector(`.modal-${item.getAttribute('data-modal')}`).classList.remove("invisible")
    }
})

document.querySelectorAll('.modal__bgd').forEach(item => {
    item.onclick = () => {
        item.closest(".modal").classList.add("opacity-0")
        item.closest(".modal").classList.add("invisible")
    }
})
document.querySelectorAll('.modal__close').forEach(item => {
    item.onclick = () => {
        item.closest(".modal").classList.add("opacity-0")
        item.closest(".modal").classList.add("invisible")
    }
})

if(document.querySelector("#inline-picker")) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    new AirDatepicker('#inline-picker', {
        inline: true,
        multipleDates: true,
        minDate: tomorrow,
        nextHtml: `<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25039 0.388199C0.762891 0.875699 0.762891 1.6632 1.25039 2.1507L6.10039 7.0007L1.25039 11.8507C0.762891 12.3382 0.762891 13.1257 1.25039 13.6132C1.73789 14.1007 2.52539 14.1007 3.01289 13.6132L8.75039 7.8757C9.23789 7.3882 9.23789 6.6007 8.75039 6.1132L3.01289 0.375699C2.53789 -0.0993012 1.73789 -0.0993012 1.25039 0.388199Z" fill="white"/></svg>`,
        prevHtml: `<svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.74961 0.388199C9.23711 0.875699 9.23711 1.6632 8.74961 2.1507L3.89961 7.0007L8.74961 11.8507C9.23711 12.3382 9.23711 13.1257 8.74961 13.6132C8.26211 14.1007 7.47461 14.1007 6.98711 13.6132L1.24961 7.8757C0.76211 7.3882 0.76211 6.6007 1.24961 6.1132L6.98711 0.375699C7.46211 -0.0993012 8.26211 -0.0993012 8.74961 0.388199Z" fill="white" style="fill:white;fill-opacity:1;"/></svg>`
    })
}
