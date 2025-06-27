
/* Mostra o botão a partir da section "banner"*/
window.addEventListener('scroll', function () {
    const banner = document.querySelector('.banner');
    const btn = document.getElementById('btn-topo');
    if (!banner || !btn) return;
    const bannerTop = banner.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > bannerTop - 100) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
});

// Scroll suave ao topo
document.getElementById('btn-topo').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Inicializa o Swiper quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 10,
        slidesPerView: 1, // padrão mobile
        pauseOnMouseEnter: true,
        pagination: {
            el: '.swipper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // a partir de 600px, mostra 2 slides
            600: {
                slidesPerView: 1,
            },
            // a partir de 992px, mostra 3 slides
            992: {
                slidesPerView: 2,
            },
            // a partir de 1200px, mostra 4 slides
            1200: {
                slidesPerView: 3,
            }
        }
    });
});