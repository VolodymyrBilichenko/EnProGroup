

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