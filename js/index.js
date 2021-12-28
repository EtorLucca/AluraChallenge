function ReturnColor(c){
    var c = document.getElementById("color").value;
    let codeEditor = document.getElementById('code__editor');
    codeEditor.style.backgroundColor = c;
    return c;
}

const linguagem = document.querySelector('.project__language')
const areaCodigo = document.querySelector('.code__wrapper')
const botao = document.querySelector('.main__button')

function aplicaHighlight() {
    const codigo = areaCodigo.innerText;
    areaCodigo.innerHTML = `<code class="text__editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaCodigo.querySelector('code'))
}

botao.addEventListener('click', () => {
    aplicaHighlight();
})