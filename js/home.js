const projects = [
    {  
        name: 'Portfólio Pessoal',
        description: `Reunindo conhecimentos  que adquiri, montei este site de Portfólio Pessoal.
        Este projeto foi feito com estrutura em <b>Html</b>, estilização em <b>Css</b>,  algumas funções e animações em <b>Javascript</b>, formulário de contato que envia email usando <b>Php</b>, desenvolvido com designer próprio e usando Media Queries para deixar-lo responsivo.
        <br/><br/>
        Link para projeto: <a href="https://leandrodev.com.br">click aqui</a>
        <br/><br/>
        Link para repositório: <a href="https://github.com/leandros8/pagina-pessoal">click aqui</a>
        `,
        prints: [
        '../imgs/projeto1/1.png',
        '../imgs/projeto1/2.png',
        '../imgs/projeto1/3.png', 
        '../imgs/projeto1/4.png',
        '../imgs/projeto1/5.png',
        '../imgs/projeto1/6.png',
        '../imgs/projeto1/7.png',
        '../imgs/projeto1/8.png',  
        '../imgs/projeto1/9.png',
        '../imgs/projeto1/10.png',
    ],
        img: '../imgs/projeto1/bg.png'
    },
    {  
        name: 'Calendario e Tarefas',
        description: `Olá pessoal! Fiz esse projeto utilizando os conhecimentos em React que adquiri. React é uma biblioteca front-end JavaScript incrível de código aberto para a criação de interfaces.
        <br/><br/>
        Aplicação conta com páginas para visualização de Ano, Mês, Semana, Dia e Tarefas
        <br/><br/>
        # Nesse projeto utilizei:<br/>
        * Html Semântico<br/>
        * Componentes em React<br/>
        * FlexBox<br/>
        * Grid<br/>
        * Responsividade<br/>
        * Media Screen<br/>
        * 1030 linha de códigos css<br/>
        * Designer Próprio<br/>
        * Designer Dark<br/>
        * Interface fácil e leve de usar<br/>
        * Tarefas salvas em local storage do navegador, permanecendo mesmo com a atualização da página
        <br/><br/>
        Link para projeto: <a href="https://leandros8.github.io/projeto-calendario-react/">click aqui</a>
        <br/><br/>
        Link para repositório: <a href="https://github.com/leandros8/projeto-calendario-react">click aqui</a>
        `,
        prints: [
            '../imgs/projeto2/1.png',
            '../imgs/projeto2/2.png',
            '../imgs/projeto2/3.png', 
            '../imgs/projeto2/4.png',
            '../imgs/projeto2/5.png',
            '../imgs/projeto2/6.png',
            '../imgs/projeto2/7.png',
            '../imgs/projeto2/8.png',  
            '../imgs/projeto2/9.png',
            '../imgs/projeto2/10.png',
            '../imgs/projeto2/11.png',
        ],
            img: '../imgs/projeto2/bg.png'
    },
    {  
        name: 'Agencia Bold',
        description: `Fiz esse projeto front-end durante um curso na plataforma da Danki Code, usei meus conhecimentos em <b>Html</b> e <b>Css</b>.
        Projeto suporta dispositivos móveis por meio da responsividade.
        
        <br/><br/>
        Link para projeto: <a href="https://leandros8.github.io/projeto-agencia-bold/">click aqui</a>
        <br/><br/>
        Link para repositório: 
        <a href="https://github.com/leandros8/projeto-agencia-bold">click aqui</a>
        `,
        prints: [
            '../imgs/projeto3/1.png',
            '../imgs/projeto3/2.png',
            '../imgs/projeto3/3.png', 
            '../imgs/projeto3/4.png',
            '../imgs/projeto3/5.png',
            '../imgs/projeto3/6.png',
            '../imgs/projeto3/7.png',
            '../imgs/projeto3/8.png',  
            '../imgs/projeto3/9.png',
        ],
            img: '../imgs/projeto3/bg.png'
    },
    {  
        name: 'Jogo Super Mario',
        description: `
        Joguinho do super mario feito com <b>Html</b>, <b>Css</b> e <b>Javascript</b>. Feito de forma simples e básico. Aperte spaço para começar e pular
        
        <br/><br/>
        Link para projeto: <a href="https://leandros8.github.io/jogo-super-mario/">click aqui</a>
        <br/><br/>
        Link para repositório: 
        <a href="https://github.com/leandros8/jogo-super-mario.git">click aqui</a>
        `,
        prints: [
            '../imgs/projeto4/1.gif',
            '../imgs/projeto4/2.png',
        ],
            img: '../imgs/projeto4/bg.png'
    },
    {  
        name: 'Rede Social',
        description: `Pequena rede social que estou construindo usando: <b>Html</b>, <b>Css</b>, <b>Javascript</b>, <b>React</b> e <b>Firebase</b>.
        <br/><br/>
        O projeto ainda está em desenvolvimento e pretendo aprimorá-lo.
        <br/><br/>
        Com essa rede social você pode se poderá:<br/>
        * Se cadastrar<br/>
        * Fazer login<br/>
        * Ver postagem de outras pessoas<br/>
        * Postar foto e legenda<br/>
        * Ver comentários<br/>
        * Comentar em outras postagens<br/>
        <br/>
        Link para projeto: <a href="https://www.rede.leandrodev.com.br">click aqui</a>
        <br/><br/>
        Link para repositório: 
        <a href="https://github.com/leandros8/instagram-clone">click aqui</a>
        `,
        prints: [
            '../imgs/projeto5/1.png',
            '../imgs/projeto5/2.png',
            '../imgs/projeto5/3.png',
            '../imgs/projeto5/4.png',
        ],
            img: '../imgs/projeto5/bg.png'
    }
]

let projec = '';

projects.map((e, i) => {
    projec += `<div onclick='openModal(${i})' class="box-project">
        <img src="${e.img}" alt="img projects ${i}">
        <h1>${e.name}</h1>
    </div>`;
});

document.querySelector('.portfolio .projects').innerHTML = projec;

let ind = 0;

function change() {
    document.querySelectorAll('.modal-info .slide li')[ind].style.display = 'block';
    document.querySelectorAll('.modal-info .slide li')[ind].style.opacity = '1';
    document.querySelectorAll('.slide-ind input')[ind].checked = true;
}

function changeRadio() {
    let inputs = document.querySelectorAll('.slide-ind input');
    let imgs = document.querySelectorAll('.modal-info li');
    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener('change', () => {
            imgs[ind].style.transform = 'translate(0, 100%)';
            imgs[ind].style.opacity = 0;
            setTimeout(() => {
                imgs[ind].style.display = "none"
                imgs[ind].style.transform = 'none';
                ind = i;
                change();
            }, 1000);
        })
    }
}

document.querySelector('.modal-content .prev').addEventListener('click', () => {
    let imgs = document.querySelectorAll('.modal-info li');

    imgs[ind].style.transform = 'translate(-100%, 0)';
    imgs[ind].style.opacity = 0;

    setTimeout(() => {
        imgs[ind].style.display = "none"
        imgs[ind].style.transform = 'none';
        if (ind == 0) ind = imgs.length - 1; else ind--;
        change();
    }, 1000);

})

document.querySelector('.modal-content .next').addEventListener('click', () => {
    let imgs = document.querySelectorAll('.modal-info li');

    imgs[ind].style.transform = 'translate(100%, 0)';
    imgs[ind].style.opacity = 0;

    setTimeout(() => {
        imgs[ind].style.display = "none"
        imgs[ind].style.transform = 'none';
        if (ind == imgs.length - 1) ind = 0; else ind++;
        change();
    }, 1000);

})

function scroll() {
    let menu = document.querySelector('.menu');
    let title = document.querySelector('.box-title')

    if (window.pageYOffset > 170) {
        menu.style.visibility = 'hidden';
        title.style.visibility = 'hidden';
    } else {
        menu.style.visibility = 'visible';
        title.style.visibility = 'visible';
    }
};scroll();

document.addEventListener("scroll", scroll);

function openModal(ind) {
    let projec = projects[ind];
    let imgs = '';
    let slideInds = '';
    document.querySelector('.modal-project').style.display = 'flex';
    document.querySelector('.modal-project').style.overflow = 'scroll';
    document.documentElement.style.overflow = 'hidden'
    document.querySelector('.modal-text h1').innerText = projec.name;
    document.querySelector('.modal-text p').innerHTML = projec.description;

    for (let i = 0; i < projec.prints.length; ++i) {
        imgs += `<li><img alt="img slide ${i}" src="${projec.prints[i]}"/></li>`;
        slideInds += '<label><input name="pointer" type="radio"><span></span></label>';
    }

    document.querySelector('.modal-info .slide').innerHTML = imgs;
    document.querySelector('.modal-info .slide-ind').innerHTML = slideInds;

    changeRadio();
    change();
}

document.querySelector('.modal-content .close').addEventListener('click', () => {
    document.querySelector('.modal-project').style.display = 'none';
    document.documentElement.style.overflow = 'auto';
    ind = 0;
}); 