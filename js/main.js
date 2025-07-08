
/* Mostra o botão a partir da section "banner"*/
window.addEventListener('scroll', function () {
    const btn = document.getElementById('btn-topo');
    if (!btn) return;

    // Verifica se está na página principal ou na de projetos
    const banner = document.querySelector('.banner');
    const pag_projetos = document.querySelector('.pagina-projetos');

    let triggerTop = 0;
    if (pag_projetos) {
        triggerTop = pag_projetos.getBoundingClientRect().top + window.scrollY;
    } else if (banner) {
        triggerTop = banner.getBoundingClientRect().top + window.scrollY;
    } else {
        btn.style.display = 'none';
        return;
    }

    if (window.scrollY > triggerTop - 100) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
    }
});

// Scroll suave ao topo (apenas uma vez)
const btnTopo = document.getElementById('btn-topo');
if (btnTopo) {
    btnTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


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