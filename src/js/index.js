

AOS.init({
    once: true
});

// open Oferta

const OfertaBtn = document.querySelectorAll('.oferta');
const OfertaBody = document.querySelectorAll('.ofertaBody');

OfertaBtn.forEach(item => {
    item.addEventListener('click', () => {
        OfertaBody.forEach(item => {
            item.classList.toggle('h-[100%]')
        })
    })
})


// swiper

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});