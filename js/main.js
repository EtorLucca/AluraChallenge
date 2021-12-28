function editor(){
    window.location.href = "./index.html";
}

function comunidade(){
    window.location.href = "./comunidade.html";
}

function menuAbrir(){
    const posicao = document.getElementById('menu__flutuante')
    posicao.classList.remove('none')
    posicao.classList.add('flex')
}

function menuFechar(){
    const posicao = document.getElementById('menu__flutuante')
    posicao.classList.remove('flex')
    posicao.classList.add('none')
}