
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


// Dados dos projetos (exemplo, adapte conforme seus projetos)
const projetosDetalhes = [
    {
        nome: "Viação Alvorada",
        img: "img/projetos/projeto-viacaoAlvoradaSite.png",
        descricao: "Site institucional da Viação Alvorada Desenvolvimento completo do site institucional da operadora de transportes Viação Alvorada(viacaoalvorada.pt), utilizando WordPress com tema customizado e integração de módulos específicos(formulários de contacto, sistema de “Perdidos e Achados” e mapa de rotas).Projeto focado em acessibilidade, desempenho e usabilidade responsiva, com painel de gestão otimizado para equipe interna.",
        link: "https://www.viacaoalvorada.pt/",
        repo: "https://github.com/leal86/viacaoalvorada-site"
    },
    // ...adicione os outros projetos aqui
];

// Função para abrir o modal
function abrirModalProjeto(index) {
    const modal = document.getElementById('modal-projeto');
    const projeto = projetosDetalhes[index];
    document.getElementById('modal-projeto-img').src = projeto.img;
    document.getElementById('modal-projeto-titulo').textContent = projeto.nome;
    document.getElementById('modal-projeto-descricao').textContent = projeto.descricao;
    document.getElementById('modal-projeto-link').href = projeto.link;
    document.getElementById('modal-projeto-repo').href = projeto.repo;
    modal.style.display = 'flex';
}

// Fechar modal ao clicar no X ou fora do conteúdo
document.querySelector('.modal-projeto__fechar').onclick = function () {
    document.getElementById('modal-projeto').style.display = 'none';
};
document.getElementById('modal-projeto').onclick = function (e) {
    if (e.target === this) this.style.display = 'none';
};

// Adicione evento nos itens da lista de projetos
document.querySelectorAll('.projetos_lista_item').forEach((item, i) => {
    item.onclick = () => abrirModalProjeto(i);
});