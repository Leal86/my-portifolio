
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
        img: "img/projetos/projeto-viacaoAlvoradaSite-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Site institucional da Viação Alvorada Desenvolvimento completo do site institucional da operadora de transportes Viação Alvorada (viacaoalvorada.pt), utilizando WordPress com tema customizado e integração de módulos específicos (formulários de contacto, sistema de “Perdidos e Achados” e mapa de rotas).</p> <br> <p class='modal-projeto-descricao-texto'>Desenvolvi o website oficial da Viação Alvorada (viacaoalvorada.pt) — empresa responsável pela operação da Carris Metropolitana na Área 1 da Grande Lisboa. O projeto foi construído em WordPress, com tema personalizado, adaptado para navegação responsiva, rápida e acessível a todos os públicos.</p> <br> <p class='modal-projeto-descricao-texto'>Implementei seções dinâmicas como notícias, formulários de contacto, página de “Perdidos e Achados” com workflow interno, além da integração com canais de suporte ao cliente. Também realizei otimizações de SEO, segurança e desempenho, com foco na escalabilidade e facilidade de gestão pelos administradores da empresa.</p>",
        link: "https://www.viacaoalvorada.pt/",

    },

    {
        nome: "Site fictício de uma Financeira",
        img: "img/projetos/projeto-finans-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Criei esta landing page para simular a apresentação de um app financeiro fictício chamado “Finans”. O objetivo foi trabalhar a construção de uma página institucional clara, com foco em conversão e apresentação de funcionalidades.</p> <br> <p class='modal-projeto-descricao-texto'>Utilizei HTML e CSS puro para estruturar elementos como botões de download, áreas de destaque visual, descrição de recursos e chamadas para ação. O projeto é 100% responsivo e aplicável a landing pages de startups e apps reais.</p>",
        link: "https://leal86.github.io/finans-app/",
        repo: "https://github.com/Leal86/finans-app"
    },

    {
        nome: "Clone do Spotify",
        img: "img/projetos/projeto-spotifyClone-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi este projeto como exercício prático de clonagem da landing page do Spotify, utilizando apenas HTML e CSS.</p> <br> <p class='modal-projeto-descricao-texto'>Busquei replicar fielmente o layout, tipografia, espaçamentos e organização visual da versão oficial, reforçando habilidades em responsividade e estrutura em grid/flexbox. É um projeto ideal para demonstrar domínio de front-end focado em interfaces reais do mercado.</p>",
        link: "https://leal86.github.io/clone-spotify-site/",
        repo: "https://github.com/Leal86/clone-spotify-site"
    },

    {
        nome: "Cordel Moderno com Parallax",
        img: "img/projetos/projeto-cordelModerno-site-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi esta landing page inspirada em literatura de cordel utilizando HTML e CSS puro, com foco em experimentação visual por meio do efeito parallax.</p> <br> <p class='modal-projeto-descricao-texto'> O objetivo do projeto foi explorar técnicas de posicionamento e sobreposição de camadas para criar profundidade e movimento ao rolar a página. Todo o código foi estruturado de forma semântica, com responsividade e compatibilidade entre dispositivos móveis e desktop. Uma abordagem limpa e performática, ideal para apresentação de conteúdo cultural com apelo visual.</p>",
        link: "https://leal86.github.io/cordel-moderno-paralax/",
        repo: "https://github.com/Leal86/cordel-moderno-paralax"
    },
    
     {
        nome: "🎭 Culturama Website",
        img: "img/projetos/projeto-culturamaSite-smal.jpg",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi esta landing page para simular um portal de divulgação de eventos culturais e artísticos. Estruturado com HTML e CSS puro, o site apresenta seções para agenda de eventos, descrição institucional, chamadas para participação e contatos.</p> <br> <p class='modal-projeto-descricao-texto'>O layout foi projetado com foco em clareza visual, identidade cultural e responsividade, sendo ideal para projetos relacionados a centros culturais, coletivos ou campanhas públicas de cultura.</p>",
        link: "https://leal86.github.io/cultura-eventos/",
        repo: "https://github.com/Leal86/cultura-eventos"
    },

    {
        nome: "História do Sistema Android",
        img: "img/projetos/projeto-androidTechInsights-site-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Desenvolvi esta landing page para simular um portal de divulgação de eventos culturais e artísticos. Estruturado com HTML e CSS puro, o site apresenta seções para agenda de eventos, descrição institucional, chamadas para participação e contatos.</p> <br> <p class='modal-projeto-descricao-texto'>O layout foi projetado com foco em clareza visual, identidade cultural e responsividade, sendo ideal para projetos relacionados a centros culturais, coletivos ou campanhas públicas de cultura.</p>",
        link: "https://leal86.github.io/android-tech-insights/",
        repo: "https://github.com/Leal86/android-tech-insights"
    },
    
    {
        nome: "Tec Blog",
        img: "img/projetos/projeto-tecBlog-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Blog fictício criado com HTML e CSS, simulando a estrutura de um portal de notícias. Possui layout responsivo, seções de postagens e navegação lateral. Projeto voltado para prática de estrutura editorial.</p> <br> <p class='modal-projeto-descricao-texto'>Desenvolvi o TecBlog como um exercício de prática em construção de blogs estáticos com HTML e CSS, aplicando técnicas básicas de layout, tipografia e separação de conteúdo. A estrutura inclui cabeçalho com menu de navegação, posts organizados em colunas, barra lateral com categorias e rodapé. Todo o layout é responsivo e visa simular a arquitetura típica de sites de notícias, servindo como base para projetos futuros mais complexos.</p>",
        link: "https://leal86.github.io/tecblog-praticando/",
        repo: "https://github.com/Leal86/tecblog-praticando"
    },

    {
        nome: "Secret Number Game",
        img: "img/projetos/projeto-jogoNumeroSecreto-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Jogo simples de adivinhação com lógica em JavaScript puro. Projeto interativo com manipulação de DOM, entrada de dados e lógica condicional.</p> <br> <p class='modal-projeto-descricao-texto'>Criei este jogo interativo de adivinhação de número secreto como prática de lógica em JavaScript. O jogador precisa descobrir um número aleatório com base em dicas visuais. A interface, desenvolvida com HTML e CSS, se conecta a uma lógica JS que valida a entrada, compara com o número sorteado e fornece feedback ao usuário. Projeto ideal para consolidar fundamentos como eventos, loops, condicional e manipulação de DOM.</p>",
        link: "https://leal86.github.io/secret-number-game/",
        repo: "https://github.com/Leal86/secret-number-game"
    },

    {
        nome: "Loja virtual de livros",
        img: "img/projetos/projeto-loja-virtual-livros-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Site de e-commerce fictício voltado para venda de livros, com HTML e CSS. Estrutura responsiva, com carrossel, categorias e layout moderno.</p> <br> <p class='modal-projeto-descricao-texto'>Inspirado em lojas de livros digitais, o projeto AluraBooks foi criado com HTML e CSS puro, utilizando técnicas modernas de layout com grid e flexbox. A estrutura conta com carrossel de destaques, navegação entre categorias e apresentação clara dos produtos. O site é 100% responsivo e representa uma boa base para projetos de e-commerce estáticos.</p>",
        link: "https://leal86.github.io/aluraBooks-store/",
        repo: "https://github.com/Leal86/aluraBooks-store"
    },

    {
        nome: "Experiências - Landing Page",
        img: "img/projetos/projeto-experiencias-paralax-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Landing page visual com efeitos parallax, desenvolvida com HTML e CSS. Foco em camadas, transições suaves e apresentação visual moderna.</p> <br> <p class='modal-projeto-descricao-texto'>Este projeto explora técnicas de efeito parallax em páginas estáticas, com múltiplas camadas visuais que se movem de forma diferenciada ao rolar. Utilizei HTML e CSS para criar uma landing page responsiva, com foco em apresentação visual atrativa e transições suaves. Foi projetada para funcionar como vitrine ou introdução a produtos ou serviços, destacando a estética moderna sem uso de bibliotecas externas.</p>",
        link: "https://leal86.github.io/experiencias-paralax-landingPage/",
        repo: "https://github.com/Leal86/experiencias-paralax-landingPage"
    },

    {
        nome: "UNES – Site Educacional Exemplo",
        img: "img/projetos/projeto-unes-educacional-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Site institucional fictício para universidade, feito com HTML e CSS. Estrutura com páginas internas, navegação entre seções e layout limpo e responsivo.</p> <br> <p class='modal-projeto-descricao-texto'>Desenvolvi este site como exercício de estrutura institucional simples para uma universidade fictícia (UNES). O projeto conta com múltiplas páginas (home, quem somos, contato), criadas com HTML e CSS puro. A navegação é fluida entre seções e o layout responsivo adapta o conteúdo para diferentes tamanhos de tela. Projeto pensado para praticar organização de páginas estáticas e navegação entre múltiplos documentos.</p>",
        link: "https://leal86.github.io/unes-site-exemplo/index.html",
        repo: "https://github.com/Leal86/unes-site-exemplo"
    },

    {
        nome: "Anna Bella - Modelo",
        img: "img/projetos/projeto-anna-bella-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Site pessoal fictício para modelo, criado com HTML e CSS. Layout responsivo, com seções de biografia, galeria e contato. Foco em organização de conteúdo e visual limpo.</p> <br> <p class='modal-projeto-descricao-texto'>Este projeto simula um site de apresentação pessoal de uma modelo chamada Anna Bella. Desenvolvido com HTML e CSS, o site conta com páginas dedicadas à biografia, portfólio fotográfico e informações de contato. A estrutura é responsiva e voltada para destacar a identidade visual de forma elegante e organizada. Ideal como modelo de site institucional para artistas, influenciadores ou criadores.</p>",
        link: "https://leal86.github.io/anna-bella-modelo-site/index.html",
        repo: "https://github.com/Leal86/anna-bella-modelo-site"
    },

    {
        nome: "Youtube (clone)",
        img: "img/projetos/projeto-clone-youtube-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Simulação de plataforma de vídeos com HTML e CSS. Layout responsivo inspirado em serviços de streaming. Organização por cards e barra de navegação.</p> <br> <p class='modal-projeto-descricao-texto'>Criei este projeto como uma simulação de plataforma de vídeos, utilizando HTML e CSS. A estrutura do site apresenta vídeos organizados em cards, com thumbnails, títulos e descrições, além de navegação responsiva por categorias. O layout foi inspirado em players modernos de vídeo on-demand, com foco em organização visual e experiência do usuário.</p>",
        link: "https://leal86.github.io/aluraPlay/",
        repo: "https://github.com/Leal86/aluraPlay"
    },

    {
        nome: "Healthy Food – Landing Page de Alimentação Saudável",
        img: "img/projetos/projeto-healthy-food-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Landing page promocional sobre alimentação saudável, criada com HTML e CSS. Design atrativo, responsivo e com seções informativas bem distribuídas.</p> <br> <p class='modal-projeto-descricao-texto'>Esta landing page foi criada para promover um estilo de vida saudável, com foco em apresentação visual clara e moderna. Utilizei HTML e CSS puro para desenvolver seções como benefícios, produtos, depoimentos e contato. O design responsivo proporciona ótima navegação em dispositivos móveis e pode ser adaptado a campanhas de nutrição, academias ou delivery saudável.</p>",
        link: "https://leal86.github.io/healthy-food-web/",
        repo: "https://github.com/Leal86/healthy-food-web"
    },

    {
        nome: "Coffe Menu – Menu Digital",
        img: "img/projetos/projeto-menu-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Página de menu digital de cafeteria com HTML e CSS. Layout responsivo e organizado em cards de produtos.</p> <br> <p class='modal-projeto-descricao-texto'>Este menu digital simula a apresentação de produtos de uma cafeteria. O layout foi construído com HTML e CSS, utilizando estrutura em cards com imagens, nomes e preços. O design é responsivo e pode ser adaptado para uso em tablets ou QR codes em mesas.</p>",
        link: "https://leal86.github.io/coffe-menu/",
        repo: "https://github.com/Leal86/coffe-menu"
    },

    {
        nome: "🎲 Sorteador de Números com JS",
        img: "img/projetos/projeto-sorteador-numeros-smal.png",
        descricao: "<p class='modal-projeto-descricao-texto'>Aplicação de sorteio numérico com HTML, CSS e JS. Gera números aleatórios e atualiza interface dinamicamente.</p> <br> <p class='modal-projeto-descricao-texto'>Este projeto permite gerar números aleatórios com base em um intervalo definido pelo usuário. Desenvolvido com HTML, CSS e JavaScript, possui interface simples e funcional, sendo um ótimo exercício de manipulação de formulários, entrada de dados e geração aleatória.</p>",
        link: "https://leal86.github.io/sorteador-numerosJS/",
        repo: "https://github.com/Leal86/sorteador-numerosJS"
    },

    {
        nome: "",
        img: "",
        descricao: "<p class='modal-projeto-descricao-texto'></p> <br> <p class='modal-projeto-descricao-texto'></p>",
        link: "",
        repo: ""
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