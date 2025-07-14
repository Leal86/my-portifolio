
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
        nome: "Site institucional da Viação Alvorada",
        img: "img/projetos/projeto-viacaoAlvoradaSite.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Site institucional da Viação Alvorada Desenvolvimento completo do site institucional da operadora de transportes Viação Alvorada (viacaoalvorada.pt), utilizando WordPress com tema customizado e integração de módulos específicos (formulários de contacto, sistema de “Perdidos e Achados” e mapa de rotas).</p> <br> <p class='modal-projeto-descricao-texto'>Desenvolvi o website oficial da Viação Alvorada (viacaoalvorada.pt) — empresa responsável pela operação da Carris Metropolitana na Área 1 da Grande Lisboa. O projeto foi construído em WordPress, com tema personalizado, adaptado para navegação responsiva, rápida e acessível a todos os públicos.</p> <br> <p class='modal-projeto-descricao-texto'>Implementei seções dinâmicas como notícias, formulários de contacto, página de “Perdidos e Achados” com workflow interno, além da integração com canais de suporte ao cliente. Também realizei otimizações de SEO, segurança e desempenho, com foco na escalabilidade e facilidade de gestão pelos administradores da empresa.</p>",
        link: "https://www.viacaoalvorada.pt/",

    },

    {
        nome: "Site fictício de uma Financeira",
        img: "img/projetos/projeto-finans.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Criei esta landing page para simular a apresentação de um app financeiro fictício chamado “Finans”. O objetivo foi trabalhar a construção de uma página institucional clara, com foco em conversão e apresentação de funcionalidades.</p> <br> <p class='modal-projeto-descricao-texto'>Utilizei HTML e CSS puro para estruturar elementos como botões de download, áreas de destaque visual, descrição de recursos e chamadas para ação. O projeto é 100% responsivo e aplicável a landing pages de startups e apps reais.</p>",
        link: "https://leal86.github.io/finans-app/",
        repo: "https://github.com/Leal86/finans-app"
    },

    {
        nome: "Cordel Moderno com Parallax",
        img: "img/projetos/projeto-cordelModerno-site.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi esta landing page inspirada em literatura de cordel utilizando HTML e CSS puro, com foco em experimentação visual por meio do efeito parallax.</p> <br> <p class='modal-projeto-descricao-texto'> O objetivo do projeto foi explorar técnicas de posicionamento e sobreposição de camadas para criar profundidade e movimento ao rolar a página. Todo o código foi estruturado de forma semântica, com responsividade e compatibilidade entre dispositivos móveis e desktop. Uma abordagem limpa e performática, ideal para apresentação de conteúdo cultural com apelo visual.</p>",
        link: "https://leal86.github.io/cordel-moderno-paralax/",
        repo: "https://github.com/Leal86/cordel-moderno-paralax"
    },

    {
        nome: "Cordel Moderno com Parallax",
        img: "img/projetos/projeto-cordelModerno-site.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi esta landing page para simular um portal de divulgação de eventos culturais e artísticos. Estruturado com HTML e CSS puro, o site apresenta seções para agenda de eventos, descrição institucional, chamadas para participação e contatos.</p> <br> <p class='modal-projeto-descricao-texto'>O layout foi projetado com foco em clareza visual, identidade cultural e responsividade, sendo ideal para projetos relacionados a centros culturais, coletivos ou campanhas públicas de cultura.</p>",
        link: "https://leal86.github.io/cultura-eventos/",
        repo: "https://github.com/Leal86/cultura-eventos"
    },

    {
        nome: "História do Sistema Android",
        img: "img/projetos/projeto-androidTechInsights-site.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi esta landing page para simular um portal de divulgação de eventos culturais e artísticos. Estruturado com HTML e CSS puro, o site apresenta seções para agenda de eventos, descrição institucional, chamadas para participação e contatos.</p> <br> <p class='modal-projeto-descricao-texto'>O layout foi projetado com foco em clareza visual, identidade cultural e responsividade, sendo ideal para projetos relacionados a centros culturais, coletivos ou campanhas públicas de cultura.</p>",
        link: "https://leal86.github.io/android-tech-insights/",
        repo: "https://github.com/Leal86/android-tech-insights"
    },

    {
        nome: "Clone do Spotify",
        img: "img/projetos/projeto-spotifyClone.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi este projeto como exercício prático de clonagem da landing page do Spotify, utilizando apenas HTML e CSS.</p> <br> <p class='modal-projeto-descricao-texto'>Busquei replicar fielmente o layout, tipografia, espaçamentos e organização visual da versão oficial, reforçando habilidades em responsividade e estrutura em grid/flexbox. É um projeto ideal para demonstrar domínio de front-end focado em interfaces reais do mercado.</p>",
        link: "https://leal86.github.io/clone-spotify-site/",
        repo: "https://github.com/Leal86/clone-spotify-site"
    },

    {
        nome: "Clone do Spotify",
        img: "img/projetos/projeto-spotifyClone.png",
        descricao: "<p class='modal-projeto-descricao-texto'> </p> <br> <p class='modal-projeto-descricao-texto'></p>",
        link: "https://leal86.github.io/clone-spotify-site/",
        repo: "https://github.com/Leal86/clone-spotify-site"
    },

    // ...adicione os outros projetos aqui
];

// Função para abrir o modal
function abrirModalProjeto(index) {
    const modal = document.getElementById('modal-projeto');
    const projeto = projetosDetalhes[index];
    document.getElementById('modal-projeto-img').src = projeto.img;
    document.getElementById('modal-projeto-titulo').textContent = projeto.nome;
    document.getElementById('modal-projeto-descricao').innerHTML = projeto.descricao;
    document.getElementById('modal-projeto-link').href = projeto.link;
    const btnRepo = document.getElementById('modal-projeto-repo');
    if (projeto.repo) {
        btnRepo.style.display = 'inline-block';
        btnRepo.href = projeto.repo;
    } else {
        btnRepo.style.display = 'none';
    }

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