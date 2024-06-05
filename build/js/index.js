

AOS.init({
    once: true
});

// open Oferta

const OfertaBtn = document.querySelectorAll('.ofertaBtn');
const OfertaBody = document.querySelector('.ofertaBody');

OfertaBtn.forEach(item => {
    item.addEventListener('click', () => {
        item.closest('.ofertaCard').querySelector('.ofertaBody').classList.toggle('!max-h-[1000px]')
    } )
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


//smooth scroll

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// open nav menu mob (burger)

function openNav() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "80%";
    document.getElementById("sideNav").style.marginRight = "0";
}
  
  /*Close navigation*/
function exitNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNav").style.marginRight = "-100px";
}