/*----------------------------Função salvar Projetos ---------------------------------------*/

function salvaProjeto(){
    const cor = document.getElementById("color").value;
    const nomeProjeto = document.querySelector('.project__name').value;
    const descricao = document.querySelector('.project__description').value;
    const code = document.querySelector('.text__editor').innerText;
    const projetos = JSON.parse(localStorage.getItem('projetos')) || []

    const novoProjeto = {
        cor,
        nomeProjeto,
        descricao,
        code
    }

    const projetosAtualizados = [... projetos, novoProjeto]

    localStorage.setItem('projetos', JSON.stringify(projetosAtualizados))

    window.location.href = "./comunidade.html";
    
}

/*----------------------------------Função Cria Projetos-----------------------------------------*/

const Projetos = ({cor, nomeProjeto, descricao, code}) => {
    const color = cor
    const projeto = document.createElement('div')
    projeto.classList.add('lista__projetos')
    const conteudo = `<div class="project">
        <div class="code__navegacao" style="background-color:${color};" onclick="EditaProjeto()">
            <div class="code__navegacao--text">
                <div class="elipse__small red__small"><span class="none">.</span></div>
                <div class="elipse__small yellow__small"><span class="none">.</span></div>
                <div class="elipse__small green__small"><span class="none">.</span></div>
                <div class="text__navegacao" ><xmp>${code}</xmp>
                </div>
            </div>
        </div>  
        <div>
            <h2 class="projetos__titulo">${nomeProjeto}</h2>
            <span class="projetos__descricao">${descricao}</span>
        </div>
        <div class="projetos__chat">
            <div class="projetos__chat--modificador">
                <div class="projetos__comentarios">
                    <i class="fas fa-comment"></i>
                    <span class="contador__comentarios">9</span>
                </div>
                <div class="projetos__like">
                    <i class="fas fa-heart"></i>
                    <span class="contador__like">9</span>
                </div>
            </div>
            <div class="projetos__perfil">
                <img src="./img/foto-perfil.png" alt="imagem perfil" class="header__perfil--img">
                <span class="header__perfil--nome">@Étor</span>
            </div>
        </div>
    </div>`
    
    projeto.innerHTML = conteudo
        
    return projeto;
}

/*----------------------------------Função Carrega Projetos-------------------------------------*/

const carregaProjetos = () => {
    
    const lista = document.querySelector('[data-list]');
    const projetosSalvos = JSON.parse(localStorage.getItem('projetos')) || [];

    projetosSalvos.forEach((projetosSalvos) => {
        lista.appendChild(Projetos(projetosSalvos))
    });  
}

carregaProjetos();